import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const styles = {
  section: { position: "relative" as const, minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#000" },
  overlay: { position: "absolute" as const, inset: 0, zIndex: 10, background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" },
  bgImg: { position: "absolute" as const, inset: 0 } as React.CSSProperties,
  glow: { position: "absolute" as const, top: "10%", left: "10%", width: 500, height: 500, borderRadius: "50%", filter: "blur(150px)", background: "rgba(0, 102, 255, 0.15)" },
  content: { position: "relative" as const, zIndex: 20, maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0", width: "100%" },
  inner: { maxWidth: 800 },
  badge: { display: "inline-block" as const, padding: "6px 16px", background: "rgba(0, 102, 255, 0.15)", border: "1px solid rgba(0, 102, 255, 0.5)", borderRadius: 999, color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 24 },
};

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.bgImg}>
        <div style={styles.overlay} />
        <img src="https://images.unsplash.com/photo-1540039155732-6762cb353279?w=1920" alt="LED Display Solutions" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
        <div style={styles.glow} />
      </div>

      <div style={styles.content}>
        <div style={styles.inner}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span style={styles.badge}>Global LED Manufacturer</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            Professional LED <br /><span style={{ background: "linear-gradient(90deg, #FF3344 0%, #00C853 50%, #0066FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Display Solutions.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: 24, fontSize: 18, color: "#cbd5e1", maxWidth: 600, lineHeight: 1.6 }}>
            Indoor, Outdoor, Rental, Sports, Commercial and Customized LED Display Solutions for Every Industry.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 16 }}>
            <Link to="/products" style={{ padding: "16px 32px", background: "#0066FF", color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 15px rgba(0, 102, 255, 0.3)" }} className="hover:bg-brand-dark transition-colors">
              Explore Products
            </Link>
            <Link to="/contact" style={{ padding: "16px 32px", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", background: "rgba(255,255,255,0.05)", fontWeight: 700, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", borderRadius: 999, textDecoration: "none" }} className="hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 32, color: "#94a3b8" }}>
            {["High Brightness", "True Colors", "Seamless Splicing"].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.025em", textTransform: "uppercase" }}>{s}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.5 }}>
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
