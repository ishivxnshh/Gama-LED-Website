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
            <span style={{ color: "var(--brand)", fontSize: 14, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Welcome to GAMA LED</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, marginTop: 16, letterSpacing: "-0.025em", lineHeight: 1.1, color: "var(--text-primary)" }}>
              Orchestrate your entire<br/><span style={{ color: "var(--brand)" }}>visual experience</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: "clamp(1.125rem, 2vw, 1.25rem)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              A premium LED display solutions brand backed by over 15 years of expertise in the signage and visual branding industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gap: 64, alignItems: "center" }} className="md-grid-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Who We Are</h2>
            <p style={{ marginTop: 24, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Based in Ghaziabad, we deliver high-performance LED display solutions across India for advertising, retail, corporate, events, sports, and public spaces. Our expertise is backed by <strong>Kali Industries (The Print Shop)</strong>.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              We specialize in indoor & outdoor LED displays, rental LED screens, fine pixel pitch displays, curved LED video walls, transparent LED displays, and customized digital display solutions. Our commitment to innovation, superior quality, and reliable after-sales support helps businesses create impactful visual experiences.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" alt="LED Display Innovation" style={{ width: "100%", borderRadius: 24, boxShadow: "var(--shadow-xl)" }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: "var(--bg-primary)", padding: 24, borderRadius: 16, border: "1px solid var(--border-color)", boxShadow: "var(--shadow-lg)" }} className="md-block hidden">
              <h4 style={{ fontSize: 32, fontWeight: 800, color: "var(--brand)" }}>15+</h4>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 600 }}>Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose GAMA LED */}
      <section style={{ padding: "96px 0", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 64, maxWidth: 800, margin: "0 auto 64px" }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Strengths</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Why Choose GAMA LED?</h2>
          </motion.div>

          <div className="md-grid-3" style={{ display: "grid", gap: 24 }}>
            {[
              { title: "15+ Years of Industry Experience", desc: "Decades of expertise in the signage and visual branding industry.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Complete LED Display Solutions", desc: "End-to-end LED display solutions from design to deployment.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { title: "Premium Quality Products", desc: "Superior quality products designed for maximum impact and longevity.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { title: "Professional Installation & Support", desc: "Reliable installation and after-sales support for total peace of mind.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "Pan-India Service Network", desc: "A robust service network catering to clients across India.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Trusted by Leading Brands", desc: "Preferred choice for leading brands seeking impactful visual experiences.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ background: "var(--glass-bg)", padding: 32, borderRadius: 16, border: "1px solid var(--glass-border)", cursor: "default", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="hover:shadow-md transition-all">
                <div style={{ width: 48, height: 48, background: "var(--brand)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: 20 }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
