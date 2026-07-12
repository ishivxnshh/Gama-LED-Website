import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  const reviews = [
    { name: "John Davis", role: "Facility Manager", text: "Gama LED displays have completely transformed our indoor stadium. The brightness and true colors are unmatched. Incredible build quality.", rating: 5, date: "2 months ago" },
    { name: "Sarah Jenkins", role: "Event Coordinator", text: "We ordered rental cabinets for our international expo. The locking mechanisms are so robust and easy to use. Outstanding customer support throughout the process.", rating: 5, date: "3 months ago" },
    { name: "Michael Chen", role: "Retail Director", text: "Installed their transparent series in our storefront. It stops traffic outside our store! Very premium product and reliable software.", rating: 5, date: "5 months ago" },
  ];

  return (
    <section style={{ padding: "96px 0", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <svg viewBox="0 0 48 48" style={{ width: "100%", height: "100%" }}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Google Reviews</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>4.9</span>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={20} fill="#f59e0b" color="#f59e0b" />)}
              </div>
            </div>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              See what our enterprise clients are saying about our displays and support.
            </p>
          </motion.div>
        </div>

        <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          {reviews.map((review, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 3 === 0 ? -50 : (i % 3 === 2 ? 50 : 0), y: i % 3 === 1 ? 50 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ background: "var(--bg-secondary)", padding: 32, borderRadius: 24, border: "1px solid var(--border-color)", cursor: "default", display: "flex", flexDirection: "column" }} className="hover:shadow-md transition-all">
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 48, height: 48, background: "var(--bg-tertiary)", color: "var(--text-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700 }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{review.name}</h4>
                    <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{review.role}</span>
                  </div>
                </div>
                <div style={{ width: 24, height: 24 }}>
                  <svg viewBox="0 0 48 48" style={{ width: "100%", height: "100%" }}>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  </svg>
                </div>
              </div>

              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="#f59e0b" color="#f59e0b" />)}
              </div>

              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, fontStyle: "italic", flex: 1 }}>
                "{review.text}"
              </p>
              
              <div style={{ marginTop: 24, fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
                {review.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
