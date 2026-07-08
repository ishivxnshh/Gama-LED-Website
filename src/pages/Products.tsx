import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productCategories, getProductTypeBySlug, getSeriesBySlug } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { productType, series } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = useMemo(() => {
    const products: any[] = [];
    productCategories.forEach(c => {
      c.series.forEach(s => {
        s.products.forEach(p => {
          products.push({ ...p, categoryId: c.id, seriesId: s.id, categoryName: c.name, seriesName: s.name });
        });
      });
    });
    return products;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(query) || 
      (p.description && p.description.toLowerCase().includes(query)) ||
      p.categoryName.toLowerCase().includes(query) ||
      p.seriesName.toLowerCase().includes(query)
    );
  }, [searchQuery, allProducts]);

  let headerTitle = "Professional LED Display Solutions";
  let headerDesc = "Explore our comprehensive range of indoor, outdoor, rental, and commercial LED displays designed for every industry.";
  let breadcrumbType = null;
  let breadcrumbSeries = null;


  let isFilter = false;
  if (productType) {
    const typeObj = getProductTypeBySlug(productType);
    if (typeObj) {
      headerTitle = typeObj.name;
      headerDesc = typeObj.description;
      breadcrumbType = typeObj;
      if (series) {
        if (series === 'indoor' || series === 'outdoor') {
          isFilter = true;
          headerTitle = `${series === 'indoor' ? 'Indoor' : 'Outdoor'} ${typeObj.name}`;
          breadcrumbSeries = { id: series, name: series === 'indoor' ? 'Indoor LED Display' : 'Outdoor LED Display', description: '', products: [] } as any;
        } else {
          const seriesObj = getSeriesBySlug(productType, series);
          if (seriesObj) {
            headerTitle = seriesObj.name;
            headerDesc = seriesObj.description;
            breadcrumbSeries = seriesObj;
          }
        }
      }
    }
  }

  let sideGroups = { Indoor: [] as any[], Outdoor: [] as any[], Others: [] as any[] };
  if (breadcrumbType) {
    breadcrumbType.series.forEach(s => {
      const name = s.name.toLowerCase();
      if (name.includes('indoor') || breadcrumbType.id === 'indoor-screens') {
        sideGroups.Indoor.push(s);
      } else if (name.includes('outdoor') || breadcrumbType.id === 'outdoor-screens') {
        sideGroups.Outdoor.push(s);
      } else {
        sideGroups.Others.push(s);
      }
    });
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: 80 }}>
      {/* Breadcrumbs */}
      <div style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px", fontSize: 13, color: "var(--text-secondary)", display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Link to="/" style={{ textDecoration: "none", color: "var(--text-secondary)" }} className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link to="/products" style={{ textDecoration: "none", color: !productType ? "var(--brand)" : "var(--text-secondary)", fontWeight: !productType ? 600 : 400 }} className="hover:text-brand">Products</Link>
          {breadcrumbType && (
            <>
              <span>/</span>
              <Link to={`/products/${breadcrumbType.id}`} style={{ textDecoration: "none", color: !breadcrumbSeries ? "var(--brand)" : "var(--text-secondary)", fontWeight: !breadcrumbSeries ? 600 : 400 }} className="hover:text-brand">{breadcrumbType.name}</Link>
            </>
          )}
          {breadcrumbSeries && (
            <>
              <span>/</span>
              <span style={{ color: "var(--brand)", fontWeight: 600 }}>{breadcrumbSeries.name}</span>
            </>
          )}
        </div>
      </div>

      {/* Header Banner */}
      <div style={{ position: "relative", overflow: "hidden", padding: "120px 24px 80px", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600" alt="Products Background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--bg-primary), transparent, var(--bg-primary))" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {headerTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0" }}>
            {headerDesc}
          </motion.p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px", display: "flex", gap: 48 }} className="md-flex-col">
        
        {/* Sidebar Navigation */}
        <div style={{ width: "100%", maxWidth: 300, background: "var(--bg-secondary)", padding: 24, borderRadius: 16, border: "1px solid var(--border-color)", height: "fit-content", flexShrink: 0 }}>
          
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>Search</h3>
            <div style={{ position: "relative" }}>
              <input 
                type="text" 
                placeholder="Search products, series..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "100%", padding: "12px 16px", paddingLeft: 40, borderRadius: 8, border: "1px solid var(--border-color)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 14 }}
              />
              <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>Product Types</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link to="/products" style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: !productType ? "var(--brand)" : "transparent", background: !productType ? "var(--brand-alpha-05)" : "transparent", color: !productType ? "var(--brand)" : "var(--text-secondary)", fontWeight: !productType ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
              All Products
            </Link>
            {productCategories.map(cat => (
              <Link key={cat.id} to={`/products/${cat.id}`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: productType === cat.id && !series ? "var(--brand)" : "transparent", background: productType === cat.id && !series ? "var(--brand-alpha-05)" : "transparent", color: productType === cat.id ? "var(--brand)" : "var(--text-secondary)", fontWeight: productType === cat.id ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                {cat.name}
              </Link>
            ))}
          </div>

          {breadcrumbType && (
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>{breadcrumbType.name}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link to={`/products/${breadcrumbType.id}`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: !series ? "var(--brand)" : "transparent", background: !series ? "var(--brand-alpha-05)" : "transparent", color: !series ? "var(--brand)" : "var(--text-secondary)", fontWeight: !series ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                  All Series
                </Link>
                {sideGroups.Indoor.length > 0 && (
                  <Link to={`/products/${breadcrumbType.id}/indoor`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: series === 'indoor' ? "var(--brand)" : "transparent", background: series === 'indoor' ? "var(--brand-alpha-05)" : "transparent", color: series === 'indoor' ? "var(--brand)" : "var(--text-secondary)", fontWeight: series === 'indoor' ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                    Indoor LED Display
                  </Link>
                )}
                {sideGroups.Outdoor.length > 0 && (
                  <Link to={`/products/${breadcrumbType.id}/outdoor`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: series === 'outdoor' ? "var(--brand)" : "transparent", background: series === 'outdoor' ? "var(--brand-alpha-05)" : "transparent", color: series === 'outdoor' ? "var(--brand)" : "var(--text-secondary)", fontWeight: series === 'outdoor' ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                    Outdoor LED Display
                  </Link>
                )}
                {sideGroups.Others.map(s => (
                  <Link key={s.id} to={`/products/${breadcrumbType.id}/${s.id}`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: series === s.id ? "var(--brand)" : "transparent", background: series === s.id ? "var(--brand-alpha-05)" : "transparent", color: series === s.id ? "var(--brand)" : "var(--text-secondary)", fontWeight: series === s.id ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div style={{ flex: 1 }}>
          
          {searchQuery.trim() ? (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)" }}>Search Results for "{searchQuery}"</h2>
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{searchResults.length} products found</span>
              </div>
              
              {searchResults.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
                  {searchResults.map((p, i) => (
                    <ProductCard key={`${p.categoryId}-${p.seriesId}-${p.id}`} name={p.name} description={p.description || p.categoryName} image={p.image} tags={[p.pixelPitch, p.brightness].filter(Boolean) as string[]} link={`/products/${p.categoryId}/${p.seriesId}/${p.id}`} index={i} />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "64px 0", background: "var(--bg-secondary)", borderRadius: 16, border: "1px solid var(--border-color)" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-secondary)", margin: "0 auto 16px" }}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>No products found</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>Try adjusting your search terms or browsing the categories.</p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Level 1: All Categories (No productType or series) */}
              {!productType && (
                <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
                  {productCategories.map(cat => (
                    <div key={cat.id}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
                        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)" }}>{cat.name}</h2>
                        <Link to={`/products/${cat.id}`} style={{ fontSize: 14, fontWeight: 700, color: "var(--brand)", textDecoration: "none" }} className="hover:underline">View All &rarr;</Link>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
                        {cat.series.slice(0, 3).map((s, i) => (
                          <ProductCard key={s.id} name={s.name} description={s.description} image={s.image} tags={[]} link={`/products/${cat.id}/${s.id}`} index={i} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Level 2: Specific Category (Has productType, No series) */}
              {productType && !series && breadcrumbType && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
                  {breadcrumbType.series.map((s, i) => (
                    <ProductCard key={s.id} name={s.name} description={s.description} image={s.image} tags={[]} link={`/products/${breadcrumbType.id}/${s.id}`} index={i} />
                  ))}
                </div>
              )}

              {/* Level 2 (Filtered: Indoor/Outdoor) */}
              {productType && series && isFilter && breadcrumbType && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
                  {(series === 'indoor' ? sideGroups.Indoor : sideGroups.Outdoor).map((s, i) => (
                    <ProductCard key={s.id} name={s.name} description={s.description} image={s.image} tags={[]} link={`/products/${breadcrumbType.id}/${s.id}`} index={i} />
                  ))}
                </div>
              )}

              {/* Level 3: Specific Series (Has productType and series and not filter) */}
              {productType && series && !isFilter && breadcrumbSeries && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
                  {breadcrumbSeries.products.map((p, i) => (
                    <ProductCard key={p.id} name={p.name} description={p.description} image={p.image} tags={[p.pixelPitch, p.brightness].filter(Boolean) as string[]} link={`/products/${productType}/${series}/${p.id}`} index={i} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Error state */}
          {!searchQuery.trim() && productType && !breadcrumbType && (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>Category Not Found</h2>
              <Link to="/products" style={{ display: "inline-block", marginTop: 16, color: "var(--brand)" }}>Back to Products</Link>
            </div>
          )}
        </div>
        
      </div>
      <style>{`
        .hover-bg-gray:hover { background: var(--bg-tertiary) !important; }
        @media (max-width: 768px) {
          .md-flex-col { flex-direction: column; }
          .md-sidebar { max-width: 100% !important; }
        }
      `}</style>
    </main>
  );
}
