import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-primary)", color: "var(--text-secondary)", borderTop: "1px solid var(--border-color)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: 24 }}>
              <img src="/src/assets/LOGO.jpeg" alt="Gama LED Logo" style={{ height: 48, objectFit: "contain", background: "white", padding: 4, borderRadius: 4 }} />
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>Professional LED Display Manufacturer providing high-quality indoor, outdoor, and rental LED screens for global clients. Innovation, reliability, and true colors.</p>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Products</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/products/indoor-led-display" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Indoor LED Display</Link>
              <Link to="/products/outdoor-led-display" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Outdoor LED Display</Link>
              <Link to="/products/rental-led-display" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Rental LED Display</Link>
              <Link to="/products/sports-led-display" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Sports LED Display</Link>
              <Link to="/products/commercial-led-display" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Commercial LED Display</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/about" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>About Us</Link>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Projects</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Solutions</span>
              <Link to="/contact" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Downloads</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Catalogues</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Datasheets</span>
              <span style={{ fontSize: 14, cursor: "pointer" }}>Warranty Policy</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}
          className="md-flex-row">
          <p style={{ fontSize: 12 }}>&copy; 2026 Gama LED. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24, marginLeft: "auto" }}>
            <span style={{ fontSize: 12, cursor: "pointer" }}>Privacy Policy</span>
            <span style={{ fontSize: 12, cursor: "pointer" }}>Terms of Service</span>
            <span style={{ fontSize: 12, cursor: "pointer" }}>Social Media</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
