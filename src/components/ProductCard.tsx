import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function ProductCard({ product, index = 0 }: { product: any; index?: number }) {

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}>
      <Link to={`/shop/${product.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}
        onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.05)"; const ov = e.currentTarget.querySelector(".card-overlay"); if (ov) (ov as HTMLElement).style.opacity = "0.2"; const btn = e.currentTarget.querySelector(".card-quick"); if (btn) { (btn as HTMLElement).style.opacity = "1"; (btn as HTMLElement).style.transform = "translateY(0)"; } }}
        onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; const ov = e.currentTarget.querySelector(".card-overlay"); if (ov) (ov as HTMLElement).style.opacity = "0"; const btn = e.currentTarget.querySelector(".card-quick"); if (btn) { (btn as HTMLElement).style.opacity = "0"; (btn as HTMLElement).style.transform = "translateY(8px)"; } }}>
        <div style={{ position: "relative", aspectRatio: "1/1", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden", marginBottom: 16, padding: "16px" }} className="group">
          <img src={product.images[0]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply", transition: "transform 0.5s ease" }} />
          <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.05)", transition: "background 0.3s", opacity: 0 }} />
          {product.originalPrice > product.price && (
            <span style={{ position: "absolute", top: 12, left: 12, padding: "4px 12px", background: "var(--color-success)", color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 999 }}>Sale</span>
          )}
          <div className="card-quick" style={{ position: "absolute", bottom: 12, left: 12, right: 12, opacity: 0, transform: "translateY(8px)", transition: "all 0.3s" }}>
            <div style={{ width: "100%", padding: "12px 0", background: "var(--brand)", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.025em", textTransform: "uppercase", textAlign: "center", borderRadius: 12, boxShadow: "0 4px 6px rgba(2, 132, 199, 0.2)" }}>
              View Details
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{product.name}</h3>
            <p style={{ fontSize: 12, color: "#64748b", marginTop: 2, textTransform: "capitalize" }}>{product.category.replace("-", " ")}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && <span style={{ display: "block", fontSize: 11, color: "#94a3b8", textDecoration: "line-through" }}>₹{product.originalPrice.toLocaleString()}</span>}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? "#ffb000" : "none"} stroke="#ffb000" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
          <span style={{ fontSize: 10, color: "#64748b", marginLeft: 4 }}>({product.reviews})</span>
        </div>
      </Link>
    </motion.div>
  );
}
