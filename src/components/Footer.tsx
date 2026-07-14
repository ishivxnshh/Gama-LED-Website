import { Link } from "react-router-dom";

const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

import logoUrl from "../assets/GAMA LED VC.png";
import kaliLogo from "../assets/KALI INDUSTRIES.jpg.jpeg";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer style={{ background: "var(--bg-primary)", color: "var(--text-secondary)", borderTop: "1px solid var(--border-color)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: 24 }}>
              <img src={logoUrl} alt="Gama LED Logo" style={{ height: 60, objectFit: "contain" }} />
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, padding: "12px 16px", background: "var(--bg-secondary)", borderRadius: 12, border: "1px solid var(--border-color)", width: "fit-content" }}>
              <span style={{ fontSize: 11, color: "var(--text-secondary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>A Brand Of</span>
              <img src={kaliLogo} alt="Kali Industries" style={{ height: 32, objectFit: "contain", borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>Professional LED Display Manufacturer providing high-quality indoor, outdoor, and rental LED screens for global clients. Innovation, reliability, and true colors.</p>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Products</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/products/led-modules" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>LED Modules</Link>
              <Link to="/products/indoor-screens" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Indoor LED Screens</Link>
              <Link to="/products/outdoor-screens" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Outdoor LED Screens</Link>
              <Link to="/products/rental-screens" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Rental & Stage LED Screens</Link>
              <Link to="/products/creative-screens" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Creative & Transparent Displays</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", marginBottom: 16 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/about" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>About Us</Link>
              <Link to="/contact" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Contact Us</Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}
          className="md-flex-row">
          <p style={{ fontSize: 12 }}>&copy; 2026 Gama LED. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24, marginLeft: "auto", alignItems: "center" }}>
            <Link to="/privacy-policy" style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none" }} className="hover:text-brand transition-colors">Terms of Service</Link>
            <div style={{ display: "flex", gap: 16, alignItems: "center", borderLeft: "1px solid var(--border-color)", paddingLeft: 24 }}>
              <a href="https://www.facebook.com/share/1BR1KgpQsj/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", display: "flex" }} className="hover:text-brand transition-colors"><FacebookIcon /></a>
              <a href="https://www.instagram.com/gamaled2026?igsh=MWdhMXJvemEwN2I4Zg==" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", display: "flex" }} className="hover:text-brand transition-colors"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/in/gama-led-ba380241b" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", display: "flex" }} className="hover:text-brand transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

