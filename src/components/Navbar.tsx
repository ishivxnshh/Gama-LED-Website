import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0, 0, 0, 0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 32, height: 32, background: "var(--brand)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>L</span>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, letterSpacing: "0.025em", color: "var(--brand)" }}>LUMEN</span>
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
            <Link to="/shop" style={{
              fontSize: 14, fontWeight: 600, letterSpacing: "0.025em", textTransform: "uppercase",
              textDecoration: "none", position: "relative", display: "flex", alignItems: "center", gap: 4,
              color: pathname === "/shop" || shopMenuOpen ? "var(--ink)" : "#64748b", transition: "color 0.2s",
            }}>
              Shop
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: shopMenuOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}><path d="m6 9 6 6 6-6"/></svg>
              {pathname === "/shop" && <div style={{ position: "absolute", bottom: -4, left: 0, right: 20, height: 2, background: "var(--brand)", borderRadius: 999 }} />}
            </Link>

            <AnimatePresence>
              {shopMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                  style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 400, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, boxShadow: "0 10px 25px rgba(0,0,0,0.1)", padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24, cursor: "default" }}>
                  <div style={{ position: "absolute", top: -8, left: "50%", marginLeft: -8, width: 16, height: 16, background: "#fff", borderLeft: "1px solid #e2e8f0", borderTop: "1px solid #e2e8f0", transform: "rotate(45deg)" }} />
                  
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 800, color: "var(--brand)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Categories</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                       <Link to="/shop?category=smart-tvs" onClick={() => setShopMenuOpen(false)} style={{ fontSize: 14, color: "#475569", textDecoration: "none", fontWeight: 500 }} className="hover-brand-color">Smart TVs</Link>
                       <Link to="/shop?category=air-conditioners" onClick={() => setShopMenuOpen(false)} style={{ fontSize: 14, color: "#475569", textDecoration: "none", fontWeight: 500 }} className="hover-brand-color">Air Conditioners</Link>
                       <Link to="/shop?category=washing-machines" onClick={() => setShopMenuOpen(false)} style={{ fontSize: 14, color: "#475569", textDecoration: "none", fontWeight: 500 }} className="hover-brand-color">Washing Machines</Link>
                       <Link to="/shop" onClick={() => setShopMenuOpen(false)} style={{ fontSize: 14, color: "var(--ink)", textDecoration: "none", fontWeight: 700, marginTop: 4 }}>View All Products &rarr;</Link>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 800, color: "var(--brand)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Featured</h4>
                    <Link to="/shop/s-tv-01" onClick={() => setShopMenuOpen(false)} style={{ display: "block", textDecoration: "none" }}>
                      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 8, display: "flex", flexDirection: "column", gap: 8, transition: "border-color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--brand)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}>
                        <div style={{ width: "100%", height: 80, background: "#fff", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                           <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200" alt="QLED TV" style={{ width: "80%", height: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
                        </div>
                        <div style={{ padding: "0 4px 4px" }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", margin: 0 }}>55" 4K QLED TV</p>
                          <p style={{ fontSize: 12, color: "var(--brand)", fontWeight: 700, margin: "2px 0 0 0" }}>₹34,990</p>
                        </div>
                      </div>
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
              {[{ to: "/", label: "Home" }, { to: "/shop", label: "Shop" }, { to: "/contact", label: "Contact" }].map((link) => (
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
