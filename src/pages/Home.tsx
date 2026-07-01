import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/api";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => { getProducts().then(setProducts).catch(() => {}); }, []);
  const featured = products.slice(0, 4);

  return (
    <main>
      <Hero />

      <section style={{ padding: "96px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Top Sellers</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginTop: 8, color: "var(--ink)", letterSpacing: "-0.025em" }}>Featured Products</h2>
            </div>
            <Link to="/shop" style={{ display: "none", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "var(--ink)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em" }}
              className="md-flex hover:text-brand transition-colors" onMouseEnter={(e) => { e.currentTarget.style.gap = "12px"; }} onMouseLeave={(e) => { e.currentTarget.style.gap = "8px"; }}>
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
 
          <div className="md-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
 
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: 48, textAlign: "center" }} className="md-hide">
            <Link to="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--brand)", color: "#fff", fontSize: 14, fontWeight: 700, borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 6px rgba(230, 0, 18, 0.15)" }}>View All Products</Link>
          </motion.div>
        </div>
      </section>
 
      <section style={{ position: "relative", padding: "128px 0", overflow: "hidden", background: "#000" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920" alt="AC Background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ maxWidth: 512 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Cooling</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 800, color: "#fff", marginTop: 8, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Beat The Heat <br/>This Summer.</h2>
            <p style={{ marginTop: 16, color: "#cbd5e1", lineHeight: 1.6, fontSize: 16 }}>Experience powerful and energy-efficient cooling with LUMEN Inverter Air Conditioners. Designed for extreme Indian summers with Turbo Cool technology.</p>
            <Link to="/shop" style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: "#fff", color: "var(--ink)", fontWeight: 700, fontSize: 14, letterSpacing: "0.025em", textTransform: "uppercase", borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)" }} className="hover:bg-gray-200 transition-colors">
              Explore ACs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
 
      <section style={{ padding: "96px 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Promise</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 8, color: "var(--ink)", letterSpacing: "-0.025em" }}>Why Choose LUMEN</h2>
          </motion.div>
          <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
            {[
              { title: "Japanese Technology", desc: "Built with precision and reliability. Our products incorporate advanced Japanese engineering for superior performance.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Pan-India Service", desc: "Enjoy peace of mind with our extensive service network covering over 400+ cities and quick response times.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Trusted Quality", desc: "Decades of consumer trust. Every LUMEN product undergoes rigorous quality checks to ensure long-lasting durability.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center", background: "#f8fafc", padding: 40, borderRadius: 24, border: "1px solid #e2e8f0" }} className="hover:shadow-lg transition-all group">
                <div style={{ width: 64, height: 64, background: "rgba(230, 0, 18, 0.05)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }} className="group-hover:bg-brand transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand group-hover:text-white transition-colors"><path d={item.icon}/></svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, marginBottom: 12, color: "var(--ink)", letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.6, maxWidth: 320, margin: "0 auto" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      <section style={{ padding: "96px 0", background: "var(--ink)", borderTop: "1px solid #333" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Newsletter</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 8, color: "#fff", letterSpacing: "-0.025em" }}>Don't Miss Out On Offers</h2>
            <p style={{ marginTop: 16, color: "#94a3b8", maxWidth: 448, margin: "16px auto 0", lineHeight: 1.6, fontSize: 16 }}>Subscribe to get exclusive deals, early access to new product launches, and tips for your home appliances.</p>
            <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, maxWidth: 448, marginLeft: "auto", marginRight: "auto" }}>
              <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: "16px 24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: 999, fontSize: 14, outline: "none" }} />
              <button style={{ padding: "16px 32px", background: "var(--brand)", color: "#fff", fontSize: 14, fontWeight: 800, borderRadius: 999, border: "none", cursor: "pointer", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.05em" }} className="hover:bg-brand-dark transition-colors">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
