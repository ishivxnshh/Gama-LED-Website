import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Load products
let products = [];
try {
  const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8');
  products = JSON.parse(data);
} catch (err) {
  console.error("Error reading products.json:", err);
}

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.post('/api/orders', (req, res) => {
  res.json({
    id: "ORDER-" + Math.floor(Math.random() * 900000 + 100000),
    ...req.body,
    status: "confirmed",
    createdAt: new Date().toISOString()
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
