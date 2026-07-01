import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProduct } from "../data/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    getProduct(id).then((p) => { setProduct(p); setSelectedSize(p.sizes[0]); setSelectedColor(p.colors[0]); }).catch(() => {});
  }, [id]);

  if (!product) {
    return <main style={{ paddingTop: 80, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 32, height: 32, border: "2px solid var(--ink)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />
    </main>;
  }



  return (
    <main style={{ paddingTop: 80, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>
        <Link to="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "#64748b", textDecoration: "none", marginBottom: 32 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Shop
        </Link>
 
        <div className="md-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "start" }}>
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ aspectRatio: "1/1", background: "#f8fafc", borderRadius: 16, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={product.images[activeImage]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
            </div>
            {/* Thumbnails */}
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              {product.images.map((img: string, idx: number) => (
                <div key={idx} onClick={() => setActiveImage(idx)} style={{ width: 80, height: 80, border: idx === activeImage ? "2px solid var(--brand)" : "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden", cursor: "pointer", background: "#f8fafc", padding: 4, transition: "all 0.2s" }}>
                  <img src={img} style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{product.name}</h1>
 
            {product.originalPrice > product.price && (
              <div style={{ display: "inline-block", padding: "6px 12px", background: "#4ade80", color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 4, marginTop: 16 }}>
                Save {Math.round((1 - product.price / product.originalPrice) * 100)}% (Price Updated with New GST Benefits)
              </div>
            )}

            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 16 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#4ade80" }}>Rs. {product.price.toLocaleString()}.00</span>
              {product.originalPrice > product.price && <span style={{ fontSize: 13, color: "#94a3b8", textDecoration: "line-through" }}>Rs. {product.originalPrice.toLocaleString()}.00</span>}
            </div>
  
            {/* Product Highlights */}
            <div style={{ marginTop: 32 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", marginBottom: 16 }}>Product Highlights</h4>
              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, color: "#475569", fontSize: 12, lineHeight: 1.5 }}>
                {Object.entries(product.specs || {}).map(([key, val]: any, idx) => (
                  <li key={idx}><strong>{key}:</strong> {val}</li>
                ))}
                {product.features?.map((feat: string, idx: number) => (
                  <li key={`feat-${idx}`}>{feat}</li>
                ))}
              </ul>
            </div>

            {/* Share */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32, paddingBottom: 24, borderBottom: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: 12, color: "#475569" }}>Share:</span>
              <div style={{ display: "flex", gap: 16, color: "var(--ink)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" cursor="pointer"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" cursor="pointer"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" cursor="pointer"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto", cursor: "pointer" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span style={{ fontSize: 12, color: "var(--ink)", textDecoration: "underline" }}>FAQs</span>
              </div>
            </div>

            {/* Find Nearby Stores */}
            <div style={{ marginTop: 24, padding: 20, background: "#f8fafc", borderRadius: 8, border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>Find Nearby Stores</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" cursor="pointer"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
              <p style={{ fontSize: 12, color: "#64748b", textDecoration: "underline", cursor: "pointer", margin: 0, paddingLeft: 24 }}>Discover the Closest Vijay Sales Stores in your Area.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
