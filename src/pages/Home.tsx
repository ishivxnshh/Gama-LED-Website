import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroExpandable from "../components/HeroExpandable";
import ProductCard from "../components/ProductCard";
import { productCategories } from "../data/products";

export default function Home() {
  // Extract a few featured series to showcase on the homepage
  const featuredSeries = productCategories.slice(0, 4).map(cat => ({
    ...cat.series[0],
    categoryId: cat.id
  }));

  const applications = [
    { name: "Retail Stores", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { name: "Shopping Malls", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "Conference Rooms", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Control Rooms", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { name: "Airports", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Stadiums", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Broadcast Studios", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
    { name: "Events", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
  ];

  const projects = [
    { title: "Corporate Headquarters", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" },
    { title: "International Airport", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" },
    { title: "Sports Stadium", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=600" },
    { title: "Shopping Mall", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" }
  ];

  return (
    <main>
      <HeroExpandable />

      {/* Featured Series */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Industry Leading</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Featured LED Series</h2>
            </div>
            <Link to="/products" style={{ display: "none", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "var(--text-primary)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em" }}
              className="md-flex hover:text-brand transition-colors" onMouseEnter={(e) => { e.currentTarget.style.gap = "12px"; }} onMouseLeave={(e) => { e.currentTarget.style.gap = "8px"; }}>
              View All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
 
          <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {featuredSeries.map((series, i) => (
              <ProductCard key={series.id} name={series.name} description={series.description} image={series.image} tags={series.products[0]?.applications || []} link={`/products/${series.categoryId}/${series.id}`} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style={{ padding: "96px 0", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Versatile Deployments</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>LED Applications</h2>
          </motion.div>
          <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {applications.map((app, i) => (
              <motion.div key={app.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ background: "var(--bg-secondary)", padding: "32px 16px", borderRadius: 16, textAlign: "center", border: "1px solid var(--border-color)" }} className="hover:shadow-md transition-all group hover:border-gray-900">
                <div style={{ width: 64, height: 64, margin: "0 auto 20px", background: "var(--bg-primary)", color: "var(--text-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-sm)" }} className="group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={app.icon} />
                  </svg>
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{app.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)", color: "var(--text-primary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Strengths</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Why Choose Gama LED</h2>
          </motion.div>
          <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
            {[
              { title: "Premium LED Technology", desc: "We utilize top-tier LED chips ensuring high brightness, long lifespan, and low degradation." },
              { title: "True Colors & High Refresh", desc: "Experience broadcast-quality visual performance with high refresh rates up to 7680Hz and superior color fidelity." },
              { title: "Front & Rear Maintenance", desc: "Innovative cabinet designs allow for easy installation and maintenance in any environment." },
              { title: "Customized Solutions", desc: "From unique shapes to specific pixel pitches, we engineer solutions tailored to your project." },
              { title: "24×7 Technical Support", desc: "Global support network ready to assist you round the clock for any technical challenges." },
              { title: "Global Installation", desc: "Thousands of successful projects deployed across commercial, sports, and broadcast sectors worldwide." }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: "var(--glass-bg)", padding: 40, borderRadius: 24, border: "1px solid var(--glass-border)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, marginBottom: 12, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Steps */}
      <section style={{ padding: "128px 0", background: "var(--bg-primary)", color: "var(--text-primary)", position: "relative", overflow: "hidden" }}>
        {/* Decorative background patterns */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at 100% 50%, var(--brand-alpha-08) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "100%", background: "radial-gradient(circle at 0% 100%, var(--brand-alpha-05) 0%, transparent 50%)" }} />
        
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 80 }}>
            <span style={{ color: "var(--brand)", fontSize: 13, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Efficient Process</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>Our Working Steps for Reliable<br />LED Supply Solutions</h2>
          </motion.div>

          {/* Steps Container */}
          <div style={{ position: "relative" }}>
            {/* Dotted Line */}
            <div style={{ position: "absolute", top: 60, left: "10%", right: "10%", height: 2, borderTop: "2px dashed var(--border-color)", zIndex: 0 }} />
            
            <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, position: "relative", zIndex: 1 }}>
              {[
                { 
                  num: 1, 
                  title: "Requirements Gathering", 
                  desc: "Understanding the specific requirements and objectives of the client for their LED display project.",
                  icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />
                },
                {
                  num: 2,
                  title: "Planning & Manufacturing",
                  desc: "We not only hear what customer needs but guide them correctly and start manufacturing processes to produce high-quality LED components.",
                  icon: <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                },
                {
                  num: 3,
                  title: "Wireframing & Installation",
                  desc: "We design wireframes and provide professional installation services, ensuring seamless integration of the LED displays.",
                  icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>
                },
                {
                  num: 4,
                  title: "Happy Customer",
                  desc: "We offer comprehensive support and maintenance service. At Gama LED, our ultimate goal is customer satisfaction.",
                  icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><polyline points="17 11 19 13 23 9" /></>
                }
              ].map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", width: 120, height: 120, margin: "0 auto 32px" }}>
                    {/* White Circle Background */}
                    <div style={{ width: "100%", height: "100%", background: "var(--bg-secondary)", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-sm)" }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: step.num === 4 ? 4 : 0 }}>
                        {step.num === 1 && <circle cx="9" cy="7" r="4" />}
                        {step.num === 2 && <circle cx="12" cy="12" r="3" />}
                        {step.num === 4 && <circle cx="8.5" cy="7" r="4" />}
                        {step.icon}
                      </svg>
                      {step.num === 4 && (
                        <div style={{ display: "flex", gap: 2 }}>
                          {[1,2,3,4,5].map(star => <svg key={star} width="10" height="10" fill="var(--brand)" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
                        </div>
                      )}
                    </div>
                    {/* Step Number Badge */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: 36, height: 36, background: "var(--brand)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: "#fff", border: "4px solid var(--bg-primary)" }}>
                      {step.num}
                    </div>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--text-primary)" }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section style={{ padding: "96px 0", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Case Studies</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Global LED Installations</h2>
          </motion.div>
          <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {projects.map((proj, i) => (
              <motion.div key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }} className="group">
                <img src={proj.image} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-105" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", display: "flex", alignItems: "flex-end", padding: 24 }}>
                  <h4 style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>{proj.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section style={{ padding: "96px 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gap: 64, alignItems: "center" }} className="md-grid-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>About Gama LED</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Leading the Future of LED Display Manufacturing</h2>
            <p style={{ marginTop: 24, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              With over 15 years of industry experience, Gama LED is a leading manufacturer of high-end LED displays. Our state-of-the-art manufacturing facility produces innovative solutions for indoor, outdoor, and creative applications.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              We offer comprehensive OEM / ODM services, backed by our team of professional engineers and a robust quality control system.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 32 }}>
              <div>
                <h4 style={{ fontSize: 24, fontWeight: 800, color: "var(--brand)" }}>100+</h4>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 600 }}>Countries Served</p>
              </div>
              <div>
                <h4 style={{ fontSize: 24, fontWeight: 800, color: "var(--brand)" }}>5000+</h4>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 600 }}>Completed Projects</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" alt="Manufacturing Facility" style={{ width: "100%", borderRadius: 24, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }} />
            <div style={{ position: "absolute", bottom: -24, left: -24, background: "var(--brand)", color: "#fff", padding: "24px 32px", borderRadius: 16, boxShadow: "0 10px 25px rgba(225,29,72,0.3)" }} className="md-block hidden">
              <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>ISO 9001:2015</p>
              <p style={{ fontSize: 12, opacity: 0.9 }}>Certified Manufacturer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: "128px 0", background: "linear-gradient(135deg, var(--bg-primary), var(--bg-secondary))", borderTop: "1px solid var(--border-color)", textAlign: "center", color: "var(--text-primary)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1 }}>Need the Right LED Display Solution?</h2>
            <p style={{ marginTop: 24, color: "var(--text-secondary)", fontSize: 18, lineHeight: 1.6 }}>Our experts will help you choose the perfect LED display for your project. Contact us today for a free consultation and customized quote.</p>
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <Link to="/contact" style={{ padding: "16px 40px", background: "var(--brand)", color: "#fff", fontSize: 14, fontWeight: 800, borderRadius: 999, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 15px rgba(225, 29, 72, 0.4)" }} className="hover:bg-brand-dark transition-colors">
                Get Quote
              </Link>
              <Link to="/contact" style={{ padding: "16px 40px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: 14, fontWeight: 800, borderRadius: 999, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em" }} className="hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
