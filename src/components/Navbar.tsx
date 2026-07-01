import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "../data/products";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0, 0, 0, 0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/src/assets/LOGO.jpeg" alt="Gama LED Logo" style={{ height: 48, objectFit: "contain" }} />
        </Link>
 
        <div className="md-flex" style={{ display: "none", gap: 32, alignItems: "center" }}>
          <Link to="/" style={{
            fontSize: 14, fontWeight: 600, letterSpacing: "0.025em", textTransform: "uppercase",
            textDecoration: "none", position: "relative",
            color: pathname === "/" ? "var(--ink)" : "#64748b", transition: "color 0.2s",
          }}>Home
            {pathname === "/" && <div style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: "var(--brand)", borderRadius: 999 }} />}
          </Link>

          <div style={{ position: "relative" }} onMouseEnter={() => setShopMenuOpen(true)} onMouseLeave={() => setShopMenuOpen(false)}>
            <Link to="/products" style={{
              fontSize: 14, fontWeight: 600, letterSpacing: "0.025em", textTransform: "uppercase",
              textDecoration: "none", position: "relative", display: "flex", alignItems: "center", gap: 4,
              color: pathname === "/products" || shopMenuOpen ? "var(--ink)" : "#64748b", transition: "color 0.2s",
            }}>
              Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: shopMenuOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}><path d="m6 9 6 6 6-6"/></svg>
              {pathname === "/products" && <div style={{ position: "absolute", bottom: -4, left: 0, right: 20, height: 2, background: "var(--brand)", borderRadius: 999 }} />}
            </Link>

            <AnimatePresence>
              {shopMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                  style={{ position: "fixed", top: 80, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 900, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.1)", padding: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, cursor: "default", zIndex: 100 }}>
                  
                  {productCategories.map((category) => (
                    <div key={category.id}>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: "var(--brand)", letterSpacing: "0.02em", marginBottom: 12 }}>{category.name}</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {category.series.map(series => (
                           <Link key={series.id} to={`/products/${category.id}/${series.id}`} onClick={() => setShopMenuOpen(false)} style={{ fontSize: 13, color: "#475569", textDecoration: "none", fontWeight: 500 }} className="hover-brand-color">
                             • {series.name}
                           </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div style={{ gridColumn: "span 4", borderTop: "1px solid #e2e8f0", paddingTop: 16, marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
                    <Link to="/products" onClick={() => setShopMenuOpen(false)} style={{ fontSize: 14, color: "var(--ink)", textDecoration: "none", fontWeight: 700 }}>
                      View All Products &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" style={{
            fontSize: 14, fontWeight: 600, letterSpacing: "0.025em", textTransform: "uppercase",
            textDecoration: "none", position: "relative",
            color: pathname === "/contact" ? "var(--ink)" : "#64748b", transition: "color 0.2s",
          }}>Contact
            {pathname === "/contact" && <div style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: "var(--brand)", borderRadius: 999 }} />}
          </Link>
        </div>
 
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={() => setOpen(!open)} className="md-hide"
            style={{ padding: 8, borderRadius: 999, border: "none", background: "none", cursor: "pointer", color: "var(--ink)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round"/> : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
      </div>
 
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden", borderTop: "1px solid #e2e8f0", background: "rgba(255, 255, 255, 0.98)" }}>
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
              {[{ to: "/", label: "Home" }, { to: "/products", label: "Products" }, { to: "/contact", label: "Contact" }].map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: pathname === link.to ? "var(--brand)" : "#64748b" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
