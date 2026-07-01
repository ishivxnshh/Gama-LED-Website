import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productCategories, getProductTypeBySlug, getSeriesBySlug } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { productType, series } = useParams();

  let headerTitle = "Professional LED Display Solutions";
  let headerDesc = "Explore our comprehensive range of indoor, outdoor, rental, and commercial LED displays designed for every industry.";
  let breadcrumbType = null;
  let breadcrumbSeries = null;

  if (productType) {
    const typeObj = getProductTypeBySlug(productType);
    if (typeObj) {
      headerTitle = typeObj.name;
      headerDesc = typeObj.description;
      breadcrumbType = typeObj;
      if (series) {
        const seriesObj = getSeriesBySlug(productType, series);
        if (seriesObj) {
          headerTitle = seriesObj.name;
          headerDesc = seriesObj.description;
          breadcrumbSeries = seriesObj;
        }
      }
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", paddingTop: 80 }}>
      {/* Breadcrumbs */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px", fontSize: 13, color: "#64748b", display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#64748b" }} className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link to="/products" style={{ textDecoration: "none", color: !productType ? "var(--brand)" : "#64748b", fontWeight: !productType ? 600 : 400 }} className="hover:text-brand">Products</Link>
          {breadcrumbType && (
            <>
              <span>/</span>
              <Link to={`/products/${breadcrumbType.id}`} style={{ textDecoration: "none", color: !breadcrumbSeries ? "var(--brand)" : "#64748b", fontWeight: !breadcrumbSeries ? 600 : 400 }} className="hover:text-brand">{breadcrumbType.name}</Link>
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
      <div style={{ background: "linear-gradient(135deg, #06133C, #1a3673)", color: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {headerTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginTop: 16, fontSize: 16, color: "#cbd5e1", maxWidth: 600, margin: "16px auto 0" }}>
            {headerDesc}
          </motion.p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px", display: "flex", gap: 48 }} className="md-flex-col">
        
        {/* Sidebar Navigation */}
        <div style={{ width: "100%", maxWidth: 300, background: "#fff", padding: 24, borderRadius: 16, border: "1px solid #e2e8f0", height: "fit-content", flexShrink: 0 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>Product Types</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link to="/products" style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: !productType ? "var(--brand)" : "transparent", background: !productType ? "rgba(0, 102, 255, 0.05)" : "transparent", color: !productType ? "var(--brand)" : "#475569", fontWeight: !productType ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
              All Products
            </Link>
            {productCategories.map(cat => (
              <Link key={cat.id} to={`/products/${cat.id}`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: productType === cat.id && !series ? "var(--brand)" : "transparent", background: productType === cat.id && !series ? "rgba(0, 102, 255, 0.05)" : "transparent", color: productType === cat.id ? "var(--brand)" : "#475569", fontWeight: productType === cat.id ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                {cat.name}
              </Link>
            ))}
          </div>

          {breadcrumbType && (
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>{breadcrumbType.name} Series</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link to={`/products/${breadcrumbType.id}`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: !series ? "var(--brand)" : "transparent", background: !series ? "rgba(0, 102, 255, 0.05)" : "transparent", color: !series ? "var(--brand)" : "#475569", fontWeight: !series ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                  All Series
                </Link>
                {breadcrumbType.series.map(s => (
                  <Link key={s.id} to={`/products/${breadcrumbType.id}/${s.id}`} style={{ textDecoration: "none", padding: "12px 16px", borderRadius: 8, border: "1px solid", borderColor: series === s.id ? "var(--brand)" : "transparent", background: series === s.id ? "rgba(0, 102, 255, 0.05)" : "transparent", color: series === s.id ? "var(--brand)" : "#475569", fontWeight: series === s.id ? 700 : 500, transition: "all 0.2s" }} className="hover-bg-gray">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div style={{ flex: 1 }}>
          
          {/* Level 1: All Categories (No productType or series) */}
          {!productType && (
            <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
              {productCategories.map(cat => (
                <div key={cat.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
                    <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--ink)" }}>{cat.name}</h2>
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

          {/* Level 3: Specific Series (Has productType and series) */}
          {productType && series && breadcrumbSeries && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
              {breadcrumbSeries.products.map((p, i) => (
                <ProductCard key={p.id} name={p.name} description={p.description} image={p.image} tags={[p.pixelPitch, p.brightness]} link={`/products/${productType}/${series}/${p.id}`} index={i} />
              ))}
            </div>
          )}

          {/* Error state */}
          {productType && !breadcrumbType && (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--ink)" }}>Category Not Found</h2>
              <Link to="/products" style={{ display: "inline-block", marginTop: 16, color: "var(--brand)" }}>Back to Products</Link>
            </div>
          )}
        </div>
        
      </div>
      <style>{`
        .hover-bg-gray:hover { background: #f1f5f9; }
        @media (max-width: 768px) {
          .md-flex-col { flex-direction: column; }
          .md-sidebar { max-width: 100% !important; }
        }
      `}</style>
    </main>
  );
}
