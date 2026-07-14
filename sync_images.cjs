const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src/data/products');
const publicDir = path.join(__dirname, 'public');
const files = ['indoor.ts', 'outdoor.ts', 'creative.ts', 'modules.ts', 'rental.ts', 'standees.ts'];

function sanitizeFileName(name) {
    return name.replace(/[\/\\?%*:|"<>]/g, '-').trim();
}

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // To identify top level series, we look for:
    // {
    //   id: "...",
    //   name: "SERIES NAME",
    //   description: "...",
    //   image: "/products/old.png",
    //   products: [ ... ]
    
    // We will split the file by top-level series blocks
    // A series block starts with `    {` and ends before the next `    },` or `    }`
    
    let blocks = content.split(/\n    \},\n|\n    \}\n/);
    
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        
        // Extract the top-level name and image from this block
        let nameMatch = block.match(/name:\s*"([^"]+)"/);
        let imageMatch = block.match(/image:\s*"([^"]+)"/);
        
        if (nameMatch && imageMatch) {
            let seriesName = nameMatch[1];
            let originalImage = imageMatch[1];
            
            // Wait, we need to make sure this is a series name, not the main category name like "Indoor LED Screens"
            // The main category has an `id` and `name` and `series: [`
            // So a series block will have `products: [`
            if (!block.includes('products: [')) {
                // If it doesn't have products array, it's not a series block (or it's the main object)
                continue;
            }
            
            if (!originalImage.startsWith('/products/')) continue;
            
            const ext = path.extname(originalImage);
            const safeName = sanitizeFileName(seriesName) + ext;
            const newImage = '/products/' + safeName;
            
            // Copy the file
            const oldFilePath = path.join(publicDir, originalImage);
            const newFilePath = path.join(publicDir, newImage);
            
            if (fs.existsSync(oldFilePath)) {
                if (oldFilePath !== newFilePath) {
                    fs.copyFileSync(oldFilePath, newFilePath);
                    console.log(`Copied ${originalImage} -> ${newImage} (for series ${seriesName})`);
                }
            } else {
                console.warn(`WARNING: Old file not found: ${oldFilePath}`);
            }
            
            // Replace the original image with the new image *everywhere in this block*
            // Since this block contains the child products, they will naturally be updated!
            // We use global replace on the block.
            // But we must be careful to only replace this specific image path.
            let replaceRegex = new RegExp(`image:\\s*"${originalImage.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}"`, 'g');
            blocks[i] = block.replace(replaceRegex, `image: "${newImage}"`);
        }
    }
    
    // Rejoin the blocks
    // Wait, the split removed `    },` and `    }`! We need to reconstruct.
    // It's safer to use string manipulation with indexOf instead of split/join to not lose characters.
    
    // Let's do it with indexOf.
    let newContent = content;
    // We will find each `products: [`
    // and work backwards to find `name: "..."` and `image: "..."`
    let currentIndex = 0;
    
    // we should just run a different algorithm instead of using the split result.
    // let's do this:
    let outputContent = "";
    let searchIndex = 0;
    while (true) {
        let pIndex = content.indexOf('products: [', searchIndex);
        if (pIndex === -1) {
            outputContent += content.slice(searchIndex);
            break;
        }
        
        // Find the start of this block `    {`
        let blockStart = content.lastIndexOf('    {', pIndex);
        if (blockStart === -1 || blockStart < searchIndex) {
             // Handle edge case
             blockStart = searchIndex;
        }
        
        // Find the end of this block which is the next `    },` or `    }\n  ]\n}`
        let blockEnd1 = content.indexOf('    },', pIndex);
        let blockEnd2 = content.indexOf('    }\n  ]\n}', pIndex);
        
        let blockEnd = -1;
        if (blockEnd1 !== -1 && blockEnd2 !== -1) blockEnd = Math.min(blockEnd1, blockEnd2);
        else if (blockEnd1 !== -1) blockEnd = blockEnd1;
        else if (blockEnd2 !== -1) blockEnd = blockEnd2;
        else blockEnd = content.length;
        
        let block = content.slice(blockStart, blockEnd);
        
        let nameMatch = block.match(/name:\s*"([^"]+)"/);
        let imageMatch = block.match(/image:\s*"([^"]+)"/);
        
        if (nameMatch && imageMatch && imageMatch[1].startsWith('/products/')) {
            let seriesName = nameMatch[1];
            let originalImage = imageMatch[1];
            
            const ext = path.extname(originalImage);
            const safeName = sanitizeFileName(seriesName) + ext;
            const newImage = '/products/' + safeName;
            
            const oldFilePath = path.join(publicDir, originalImage);
            const newFilePath = path.join(publicDir, newImage);
            
            if (fs.existsSync(oldFilePath)) {
                if (oldFilePath !== newFilePath) {
                    fs.copyFileSync(oldFilePath, newFilePath);
                    console.log(`Copied ${originalImage} -> ${newImage} (for series ${seriesName})`);
                }
            }
            
            let replaceRegex = new RegExp(`image:\\s*"${originalImage.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}"`, 'g');
            block = block.replace(replaceRegex, `image: "${newImage}"`);
        }
        
        outputContent += content.slice(searchIndex, blockStart) + block;
        searchIndex = blockEnd;
    }
    
    fs.writeFileSync(filePath, outputContent, 'utf8');
    console.log(`Updated ${file}`);
});
