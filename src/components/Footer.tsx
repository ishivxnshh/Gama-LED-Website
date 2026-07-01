import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", borderTop: "1px solid #1e293b" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
          <div className="md-col-span-1" style={{ gridColumn: "span 2" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, textDecoration: "none" }}>
              <div style={{ width: 32, height: 32, background: "var(--brand)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>L</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: 22, fontWeight: 800 }}>LUMEN</span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>Experience premium home entertainment and cooling solutions with advanced Japanese technology. Visual excellence and reliable performance, engineered to last.</p>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Shop</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/shop" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>All Products</Link>
              <Link to="/shop?category=smart-tvs" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Smart TVs</Link>
              <Link to="/shop?category=air-conditioners" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Air Conditioners</Link>
              <Link to="/shop?category=washing-machines" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Washing Machines</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/contact" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Contact Support</Link>
              <span style={{ fontSize: 14 }}>Installation Guide</span>
              <span style={{ fontSize: 14 }}>Warranty Policy</span>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Connect</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Instagram</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Twitter / X</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Pinterest</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>YouTube</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #1e293b", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}
          className="md-flex-row">
          <p style={{ fontSize: 12 }}>&copy; 2026 LUMEN Electronics. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24, marginLeft: "auto" }}>
            <span style={{ fontSize: 12 }}>Privacy Policy</span>
            <span style={{ fontSize: 12 }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
