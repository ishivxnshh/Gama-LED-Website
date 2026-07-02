import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputStyle: React.CSSProperties = {
  marginTop: 6, width: "100%", padding: "12px 16px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: 12,
  fontSize: 14, outline: "none", transition: "border-color 0.2s", color: "var(--text-primary)",
};
const labelStyle: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.025em", textTransform: "uppercase",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "", source: "Contact Page" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
        setForm({ name: "", company: "", phone: "", email: "", message: "", source: "Contact Page" });
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ paddingTop: 80, minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Banner */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 0 80px", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600" alt="Contact Background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--bg-primary), transparent, var(--bg-primary))" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Connect</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginTop: 8, color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Contact Gama LED</h1>
            <p style={{ marginTop: 12, color: "var(--text-secondary)", maxWidth: 600, margin: "12px auto 0", fontSize: 16, lineHeight: 1.6 }}>
              Have questions about our professional LED display solutions? Get in touch with our technical sales and engineering team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="md-grid-2">
            
            {/* Left Info Panel */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ background: "var(--bg-secondary)", padding: 32, borderRadius: 24, border: "1px solid var(--border-color)", boxShadow: "var(--shadow-sm)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginBottom: 24, color: "var(--text-primary)" }}>Corporate Office</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 40, height: 40, background: "var(--brand-alpha-08)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>Office and Works</h4>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.5 }}>
                      160, 161, Vill. Yusufpur, Ishapur<br />
                      Hapur Road, Modinagar, UP - 245304
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 40, height: 40, background: "var(--brand-alpha-08)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>Phone Support</h4>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>+91 (022) 8432-1000</p>
                    <p style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>Mon-Sat (9:00 AM – 6:00 PM IST)</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 40, height: 40, background: "var(--brand-alpha-08)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>Email Support</h4>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>gamaled2026@gmail.com</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border-color)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <strong>Technical Inquiries:</strong> If you are facing any issues with installation or require technical support, please contact our support email directly.
              </div>
            </motion.div>

            {/* Right Form Panel */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ background: "var(--bg-secondary)", padding: 32, borderRadius: 24, border: "1px solid var(--border-color)", boxShadow: "var(--shadow-sm)" }}>
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form key="contact-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>Send Inquiry</h2>
                    
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input required name="name" value={form.name} onChange={update("name")} placeholder="John Doe" style={inputStyle} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={labelStyle}>Company (Optional)</label>
                        <input name="company" value={form.company} onChange={update("company")} placeholder="Acme Inc" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input required name="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="+1 (555) 000-0000" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input required name="email" type="email" value={form.email} onChange={update("email")} placeholder="john@example.com" style={inputStyle} />
                    </div>

                    <div>
                      <label style={labelStyle}>Message / Requirement *</label>
                      <textarea required name="message" value={form.message} onChange={update("message")} placeholder="Write your requirements here..." rows={4} 
                        style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} />
                    </div>
                    
                    <input type="hidden" name="source" value={form.source} />

                    {error && (
                      <div style={{
                        padding: "12px 16px", background: "rgba(225, 29, 72, 0.08)", border: "1px solid rgba(225, 29, 72, 0.3)",
                        borderRadius: 10, fontSize: 13, color: "var(--brand)", display: "flex", alignItems: "center", gap: 8
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        {error}
                      </div>
                    )}

                    <button type="submit" disabled={loading}
                      style={{
                        marginTop: 8, padding: "14px 0", background: "var(--brand)", color: "#fff", fontWeight: 700, fontSize: 14,
                        letterSpacing: "0.025em", textTransform: "uppercase", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        boxShadow: "0 4px 6px -1px rgba(225, 29, 72, 0.2)"
                      }}>
                      {loading ? <><span className="spinner" style={{ width: 16, height: 16, borderWidth: 2, borderTopColor: "transparent" }} /> Sending...</> : "Submit Enquiry"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="success-message" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 64, height: 64, background: "#22c55e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 300, marginBottom: 24 }}>
                      Thank you for contacting Gama LED. Our technical sales team will review your inquiry and get back to you within 24 business hours.
                    </p>
                    <button onClick={() => setSuccess(false)}
                      style={{
                        padding: "10px 24px", background: "transparent", border: "1px solid var(--brand)", color: "var(--brand)",
                        fontSize: 12, fontWeight: 700, textTransform: "uppercase", borderRadius: 999, cursor: "pointer"
                      }}>
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
