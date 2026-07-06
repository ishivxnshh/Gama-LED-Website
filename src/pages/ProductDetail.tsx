import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductBySlug, getProductTypeBySlug, getSeriesBySlug } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { productType, series, product } = useParams();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("specifications");

  if (!productType || !series || !product) {
    return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Invalid URL parameters</div>;
  }

  const prod = getProductBySlug(productType, series, product);
  const typeObj = getProductTypeBySlug(productType);
  const seriesObj = getSeriesBySlug(productType, series);

  if (!prod || !typeObj || !seriesObj) {
    return (
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")} style={{ padding: "10px 20px", cursor: "pointer" }}>Back to Products</button>
      </div>
    );
  }

  // Find some related products (same series or just random)
  const relatedProducts = seriesObj.products.filter(x => x.id !== prod.id).slice(0, 4);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: 80 }}>
      {/* Dynamic Breadcrumbs */}
      <div style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px", fontSize: 13, color: "var(--text-secondary)", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "var(--text-secondary)" }} className="hover:text-brand">Home</Link>
          <span>/</span>
          <Link to="/products" style={{ textDecoration: "none", color: "var(--text-secondary)" }} className="hover:text-brand">Products</Link>
          <span>/</span>
          <Link to={`/products/${typeObj.id}`} style={{ textDecoration: "none", color: "var(--text-secondary)" }} className="hover:text-brand">{typeObj.name}</Link>
          <span>/</span>
          <Link to={`/products/${typeObj.id}/${seriesObj.id}`} style={{ textDecoration: "none", color: "var(--text-secondary)" }} className="hover:text-brand">{seriesObj.name}</Link>
          <span>/</span>
          <span style={{ color: "var(--brand)", fontWeight: 600 }}>{prod.name}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
        <div className="md-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64, alignItems: "start" }}>
          
          {/* Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ background: "var(--bg-secondary)", borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-color)", padding: 24 }}>
              <img src={prod.image} alt={prod.name} style={{ width: "100%", height: "auto", borderRadius: 16 }} />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>{prod.name}</h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 32 }}>{prod.description}</p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              {prod.applications?.map(app => (
                <span key={app} style={{ padding: "6px 12px", background: "var(--brand-alpha-10)", color: "var(--brand)", fontSize: 12, fontWeight: 700, borderRadius: 999, textTransform: "uppercase" }}>
                  {app}
                </span>
              ))}
            </div>

            <div style={{ background: "var(--bg-secondary)", borderRadius: 16, border: "1px solid var(--border-color)", padding: 24, marginBottom: 40 }}>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>Quick Specs</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
                <div>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)", textTransform: "uppercase", fontWeight: 600 }}>Pixel Pitch</p>
                  <p style={{ fontSize: 16, color: "var(--text-primary)", fontWeight: 700 }}>{prod.pixelPitch || "N/A"}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)", textTransform: "uppercase", fontWeight: 600 }}>Brightness</p>
                  <p style={{ fontSize: 16, color: "var(--text-primary)", fontWeight: 700 }}>{prod.brightness || "N/A"}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)", textTransform: "uppercase", fontWeight: 600 }}>Refresh Rate</p>
                  <p style={{ fontSize: 16, color: "var(--text-primary)", fontWeight: 700 }}>{prod.refreshRate || (prod.specifications && prod.specifications["Refresh Rate"]) || "N/A"}</p>
                </div>
              </div>
            </div>

            <button onClick={() => navigate("/contact")} style={{ width: "100%", padding: "16px", background: "var(--brand)", color: "#fff", fontSize: 16, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(225, 29, 72, 0.3)", transition: "background 0.2s" }} className="hover:bg-brand-dark">
              Request a Quote
            </button>
          </motion.div>
        </div>

        {/* Tabs section */}
        <div style={{ marginTop: 64, background: "var(--bg-secondary)", borderRadius: 24, border: "1px solid var(--border-color)", overflow: "hidden" }}>
          <div style={{ display: "flex", borderBottom: "1px solid var(--border-color)", overflowX: "auto" }}>
            {["specifications", "overview", "features", "downloads"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: "20px", background: activeTab === tab ? "var(--brand-alpha-05)" : "transparent", color: activeTab === tab ? "var(--brand)" : "var(--text-secondary)", border: "none", borderBottom: activeTab === tab ? "2px solid var(--brand)" : "2px solid transparent", fontSize: 14, fontWeight: 700, textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
                {tab}
              </button>
            ))}
          </div>
          <div style={{ padding: "32px 24px" }}>
            {activeTab === "specifications" && prod.specifications && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 24 }}>Full Specifications</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1 }}>
                  {Object.entries(prod.specifications).map(([key, value], idx) => (
                    <div key={key} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", background: idx % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)", padding: "16px", borderRadius: 8 }}>
                      <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14 }}>{key}</span>
                      <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>{value as string}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>Product Overview</h3>
                <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8 }}>The {prod.name} represents the pinnacle of our LED display technology. Designed with precision engineering, it offers unmatched reliability and visual performance for demanding professional environments. Whether it's for a high-profile corporate boardroom, a dynamic broadcast studio, or a vibrant retail space, this display delivers breathtaking clarity and true colors.</p>
              </motion.div>
            )}
            {activeTab === "features" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 24 }}>Key Features</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {prod.features?.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontSize: 16, color: "var(--text-secondary)", fontWeight: 500 }}>{f}</span>
                    </li>
                  ))}
                  {(!prod.features || prod.features.length === 0) && (
                    <li style={{ color: "var(--text-secondary)" }}>Features list coming soon.</li>
                  )}
                </ul>
              </motion.div>
            )}
            {activeTab === "downloads" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 24 }}>Resources</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                  <button style={{ padding: "16px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} className="hover:border-brand transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m7-7l5 5 5-5M12 15V3"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)" }}>Datasheet (PDF)</span>
                  </button>
                  <button style={{ padding: "16px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} className="hover:border-brand transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m7-7l5 5 5-5M12 15V3"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)" }}>User Manual</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 96 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", marginBottom: 32 }}>Related Products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} name={p.name} description={p.description} image={p.image} tags={[p.pixelPitch || ""]} link={`/products/${productType}/${series}/${p.id}`} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>
      <style>{`
        .md-grid-2 { display: grid; grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </main>
  );
}
