import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main style={{ background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", padding: "160px 24px 96px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600" alt="About Us Background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--bg-primary), transparent, var(--bg-primary))" }} />
        </div>
        
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ color: "var(--brand)", fontSize: 14, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Story</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, marginTop: 16, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Illuminating the <span style={{ color: "var(--brand)" }}>Future</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: "clamp(1.125rem, 2vw, 1.25rem)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              We are a premier global manufacturer of LED displays, committed to visual excellence, innovation, and unwavering quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gap: 64, alignItems: "center" }} className="md-grid-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>15+ Years of Excellence</h2>
            <p style={{ marginTop: 24, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Since our inception, Gama LED has pushed the boundaries of what is possible with digital displays. What started as a modest operation has grown into a globally recognized manufacturing powerhouse, serving clients in over 100 countries.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Our journey is defined by a relentless pursuit of perfection. From the sourcing of premium LED chips to our stringent quality control processes, every step we take ensures our displays deliver breathtaking clarity and true colors.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" alt="Microchip Innovation" style={{ width: "100%", borderRadius: 24, boxShadow: "var(--shadow-xl)" }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: "var(--bg-primary)", padding: 24, borderRadius: 16, border: "1px solid var(--border-color)", boxShadow: "var(--shadow-lg)" }} className="md-block hidden">
              <h4 style={{ fontSize: 32, fontWeight: 800, color: "var(--brand)" }}>2008</h4>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 600 }}>Year Founded</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "96px 0", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="md-grid-2" style={{ display: "grid", gap: 32 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: "var(--glass-bg)", padding: 48, borderRadius: 24, border: "1px solid var(--glass-border)" }}>
              <div style={{ width: 64, height: 64, background: "var(--brand)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, color: "#fff" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>Our Mission</h3>
              <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                To empower businesses and creators by providing the most reliable, vibrant, and efficient LED display solutions. We strive to engineer products that not only meet industry standards but set them, ensuring our partners always shine bright.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: "var(--glass-bg)", padding: 48, borderRadius: 24, border: "1px solid var(--glass-border)" }}>
              <div style={{ width: 64, height: 64, background: "var(--brand)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, color: "#fff" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>Our Vision</h3>
              <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                To be the global standard for visual excellence in digital infrastructure. We envision a future where our dynamic displays seamlessly integrate into every environment, transforming how the world communicates and experiences visual art.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OEM/ODM & Manufacturing */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 64, maxWidth: 800, margin: "0 auto 64px" }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Capabilities</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Advanced Manufacturing (OEM/ODM)</h2>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Our ISO 9001:2015 certified facilities are equipped to handle large-scale productions and bespoke custom solutions with precision.
            </p>
          </motion.div>

          <div className="md-grid-3" style={{ display: "grid", gap: 24 }}>
            {[
              { title: "Precision Engineering", desc: "Using automated surface-mount technology (SMT) and rigorous calibration tools to ensure zero-defect production." },
              { title: "Custom OEM/ODM", desc: "Our R&D team partners with clients to design tailored cabinet structures, PCB layouts, and pixel pitches." },
              { title: "Rigorous QA", desc: "Every module undergoes 72+ hours of aging tests, extreme temperature exposure, and waterproof certification." }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: "var(--bg-primary)", padding: 32, borderRadius: 16, border: "1px solid var(--border-color)", textAlign: "center" }}>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section style={{ padding: "96px 0", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>A Global Footprint</h2>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 48px", lineHeight: 1.6 }}>
              From iconic sports stadiums in Europe to bustling commercial centers in Asia, Gama LED displays captivate audiences worldwide.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "48px 0" }} className="md-grid-4">
              <div>
                <div style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand)" }}>100+</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 8 }}>Countries</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand)" }}>5000+</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 8 }}>Projects</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand)" }}>24/7</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 8 }}>Support</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--brand)" }}>ISO</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 8 }}>Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)" }}>Ready to partner with us?</h2>
          <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", marginBottom: 32 }}>Let our engineers craft the perfect display solution for your specific needs.</p>
          <Link to="/contact" style={{ padding: "16px 40px", background: "var(--brand)", color: "#fff", fontSize: 14, fontWeight: 800, borderRadius: 999, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em", display: "inline-block" }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
