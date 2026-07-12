import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes Gama LED stand out from the competition?",
    answer: "Gama LED provides end-to-end enterprise grade LED solutions with premium build quality, TrueColor calibration technology, and dedicated 24/7 global support."
  },
  {
    question: "Do you offer customized LED display solutions for projects?",
    answer: "Absolutely. We specialize in custom-tailored LED displays. Whether it's unique shapes, specific pixel pitches, or weather-proof outdoor installations, our engineering team will design a solution to fit your exact needs."
  },
  {
    question: "How do you ensure the quality of your LED products?",
    answer: "All our products undergo rigorous testing including aging tests, vibration tests, and extreme temperature checks in our state-of-the-art manufacturing facility before deployment."
  },
  {
    question: "What types of LED displays do you offer?",
    answer: "We offer a comprehensive range including Indoor, Outdoor, Rental, Transparent, and flexible LED displays suitable for commercial, sports, and architectural applications."
  },
  {
    question: "Do you provide technical support and maintenance services?",
    answer: "Yes, we provide comprehensive technical support, remote diagnostics, and on-site maintenance services to ensure zero downtime for your critical displays."
  },
  {
    question: "How can I request a quote or place an order for LED displays?",
    answer: "You can request a quote by visiting our Contact page and filling out the inquiry form, or simply by clicking the 'Get Quote' button in the navigation bar."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "120px 24px", background: "var(--bg-primary)", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              FAQ's – Frequently Asked Questions
            </h2>
            <p style={{ marginTop: 16, color: "var(--text-secondary)", fontSize: 16, maxWidth: 800, margin: "16px auto 0", lineHeight: 1.6 }}>
              We understand that you may have queries about our products, manufacturing processes, customization options, and more. Explore the questions below to find the information you're looking for.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gap: 64, alignItems: "center" }} className="md-grid-2">
          
          {/* Left: SVG Illustration */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: "flex", justifyContent: "center" }}>
            <svg viewBox="0 0 500 500" style={{ width: "100%", maxWidth: 600, filter: "drop-shadow(0 20px 40px rgba(225,29,72,0.15))" }}>
              <defs>
                <linearGradient id="faqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand)" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
                <linearGradient id="faqGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-dark)" />
                  <stop offset="100%" stopColor="var(--brand)" />
                </linearGradient>
              </defs>
              {/* Floating abstract bubbles */}
              <circle cx="250" cy="250" r="140" fill="url(#faqGrad)" opacity="0.1" />
              <circle cx="150" cy="180" r="60" fill="url(#faqGrad)" opacity="0.15" />
              <circle cx="350" cy="320" r="80" fill="url(#faqGradDark)" opacity="0.15" />
              <circle cx="250" cy="250" r="110" fill="none" stroke="url(#faqGrad)" strokeWidth="2" strokeDasharray="8 8" />
              
              {/* Question Marks */}
              <text x="120" y="160" fontFamily="var(--font-display)" fontSize="80" fontWeight="800" fill="var(--brand)" opacity="0.5" transform="rotate(-15 120 160)">?</text>
              <text x="380" y="200" fontFamily="var(--font-display)" fontSize="100" fontWeight="800" fill="var(--brand)" opacity="0.6" transform="rotate(20 380 200)">?</text>
              <text x="100" y="380" fontFamily="var(--font-display)" fontSize="90" fontWeight="800" fill="var(--brand-dark)" opacity="0.4" transform="rotate(-10 100 380)">?</text>
              <text x="360" y="420" fontFamily="var(--font-display)" fontSize="70" fontWeight="800" fill="var(--brand)" opacity="0.5" transform="rotate(15 360 420)">?</text>

              {/* Center Text */}
              <rect x="140" y="190" width="220" height="120" rx="20" fill="var(--bg-secondary)" stroke="var(--brand)" strokeWidth="4" />
              <text x="250" y="275" fontFamily="var(--font-display)" fontSize="80" fontWeight="900" fill="url(#faqGrad)" textAnchor="middle" letterSpacing="-2">FAQ</text>
            </svg>
          </motion.div>

          {/* Right: Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                  style={{
                    background: isOpen ? "var(--brand)" : "var(--bg-secondary)",
                    border: isOpen ? "1px solid var(--brand)" : "1px solid var(--border-color)",
                    borderRadius: 16,
                    overflow: "hidden",
                    transition: "background 0.3s, border-color 0.3s",
                    boxShadow: isOpen ? "0 10px 25px -5px rgba(225, 29, 72, 0.3)" : "var(--shadow-sm)"
                  }}
                >
                  <button
                    onClick={() => toggle(index)}
                    style={{
                      width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: "transparent", border: "none", cursor: "pointer", color: isOpen ? "#fff" : "var(--text-primary)",
                      textAlign: "left", fontSize: 16, fontWeight: 700, transition: "color 0.3s"
                    }}
                  >
                    {faq.question}
                    <div style={{ flexShrink: 0, marginLeft: 16, color: isOpen ? "#fff" : "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", background: isOpen ? "rgba(255,255,255,0.2)" : "var(--brand-alpha-10)", transition: "all 0.3s" }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ padding: "0 24px 24px", color: "rgba(255,255,255,0.9)", fontSize: 15, lineHeight: 1.6 }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
