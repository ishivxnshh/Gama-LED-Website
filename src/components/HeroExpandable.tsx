import { useState, useEffect } from "react";
import { X, Check, ArrowRight, Monitor, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GodRays, MeshGradient } from "@paper-design/shaders-react";
import { AnimatedHeroButton } from "./AnimatedHeroButton";

export default function HeroExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formStep, setFormStep] = useState<"idle" | "submitting" | "success">("idle");

  const handleExpand = () => setIsExpanded(true);
  
  const handleDelayedExpand = async () => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    handleExpand();
  };

  const handleClose = () => {
    setIsExpanded(false);
    // Reset form after a brief delay so the user doesn't see it reset while closing
    setTimeout(() => setFormStep("idle"), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStep("success");
    }, 1500);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isExpanded]);

  return (
    <>
      <div style={{
        position: "relative", display: "flex", minHeight: "100vh", flexDirection: "column",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
        background: "var(--bg-primary)", padding: "120px 16px 48px", transition: "background 0.3s"
      }}>
        
        {/* GodRays Background */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <GodRays
            colorBack="#00000000"
            colors={["#a1a1aa40", "#e4e4e740", "#71717a40", "#52525b40"]}
            colorBloom="#a1a1aa"
            offsetX={0.85}
            offsetY={-1}
            intensity={0.5}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.38}
            bloom={0.3}
            speed={0.5}
            scale={1.6}
            frame={3332042.8159981333}
            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center", maxWidth: 1000 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", borderRadius: 999,
              border: "1px solid var(--border-color)", background: "var(--bg-secondary)", padding: "4px 12px",
              fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", backdropFilter: "blur(4px)"
            }}
          >
            <span style={{ display: "flex", height: 8, width: 8, borderRadius: 999, background: "var(--brand)", marginRight: 8 }}></span>
            Discover Premium LED Displays
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800,
              letterSpacing: "-0.02em", color: "var(--text-primary)", margin: 0, lineHeight: 1.1
            }}
          >
            Orchestrate your entire <br className="hidden-sm" />
            <span style={{
              background: "linear-gradient(to bottom right, var(--brand), #fb7185)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              visual experience
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "var(--text-secondary)", maxWidth: 650, margin: "0 auto", lineHeight: 1.6
            }}
          >
            Stop wrestling with outdated screens. Gama LED provides the infrastructure to build, 
            measure, and scale your digital displays with enterprise-grade reliability.
          </motion.p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div style={{ display: "inline-block", position: "relative", marginTop: 16 }}>
                <motion.div
                  style={{ borderRadius: 100, position: "absolute", inset: 0, background: "transparent" }}
                  layout
                  layoutId="cta-card"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                >
                  <AnimatedHeroButton onSave={handleDelayedExpand} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <div style={{
            position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0" // Fullscreen on mobile, add padding on desktop via CSS class
          }} className="modal-wrapper">
            <motion.div
              layoutId="cta-card"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              style={{
                position: "relative", display: "flex", height: "100%", width: "100%", overflow: "hidden",
                background: "var(--brand)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="modal-content"
            >
              {/* Mesh Gradient Background inside Modal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
              >
                <MeshGradient
                  speed={0.6}
                  colors={["#e11d48", "#be123c", "#881337", "#f43f5e"]} // Red/Brand palette
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0.15}
                  grainOverlay={0}
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                style={{
                  position: "absolute", right: 24, top: 24, zIndex: 50, display: "flex", height: 40, width: 40,
                  alignItems: "center", justifyContent: "center", borderRadius: 999, background: "rgba(255,255,255,0.1)",
                  color: "#fff", border: "none", backdropFilter: "blur(8px)", cursor: "pointer", transition: "background 0.2s"
                }}
                className="hover-bg-white-20"
              >
                <X size={20} />
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                style={{
                  position: "relative", zIndex: 10, display: "flex", height: "100%", width: "100%", maxWidth: 1280,
                  margin: "0 auto", overflowY: "auto", overflowX: "hidden"
                }}
                className="modal-inner"
              >
                {/* Left Side: Testimonials & Info */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 32px", gap: 32, color: "#fff" }} className="modal-left">
                  <div style={{ gap: 16, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
                      Ready to scale?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 450, margin: 0 }}>
                      Join 4,000+ forward-thinking companies building the future with Gama LED.
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{
                        flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        <Monitor size={24} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0 }}>Visual Excellence</h3>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>
                          Stunning clarity and true colors embedded directly into your display solutions.
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{
                        flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        <Globe2 size={24} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0 }}>Global Support</h3>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>
                          Deploy anywhere with our extensive automated edge network and local support.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                    <figure style={{ margin: 0 }}>
                      <blockquote style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.6, marginBottom: 24, margin: 0 }}>
                        "Gama LED transformed how we display content. We went from dull screens to vibrant digital art with zero downtime."
                      </blockquote>
                      <figcaption style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div style={{
                          height: 48, width: 48, borderRadius: 999, background: "linear-gradient(to top right, #fb923c, #ec4899)",
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff"
                        }}>
                          ER
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>Elena Rodriguez</div>
                          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Creative Director, Lumina</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }} className="modal-right">
                  <div style={{
                    width: "100%", maxWidth: 450, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)", borderRadius: 24, padding: "32px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                  }}>
                    
                    {formStep === "success" ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: 400, gap: 24 }}
                      >
                        <div style={{ width: 80, height: 80, background: "#22c55e", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.3)" }}>
                          <Check size={40} color="#fff" />
                        </div>
                        <div>
                          <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8, margin: 0 }}>Request Received!</h3>
                          <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>Our team will be in touch shortly to schedule your personalized demo.</p>
                        </div>
                        <button 
                          onClick={handleClose}
                          style={{
                            padding: "8px 24px", background: "rgba(255,255,255,0.2)", color: "#fff", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 500
                          }}
                          className="hover-bg-white-30"
                        >
                          Return to Homepage
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <div>
                          <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "0 0 4px 0" }}>Get a Quote</h3>
                          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", margin: 0 }}>Fill out the form below and we'll contact you.</p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                          <div>
                            <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              Full Name
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Jane Doe"
                              style={{
                                width: "100%", padding: "12px 16px", borderRadius: 8, background: "rgba(0,0,0,0.2)",
                                border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box"
                              }}
                              className="focus-ring"
                            />
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              Work Email
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="jane@company.com"
                              style={{
                                width: "100%", padding: "12px 16px", borderRadius: 8, background: "rgba(0,0,0,0.2)",
                                border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box"
                              }}
                              className="focus-ring"
                            />
                          </div>

                          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Company
                              </label>
                              <input
                                type="text"
                                placeholder="Acme Inc"
                                style={{
                                  width: "100%", padding: "12px 16px", borderRadius: 8, background: "rgba(0,0,0,0.2)",
                                  border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box"
                                }}
                                className="focus-ring"
                              />
                            </div>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Application
                              </label>
                              <select
                                style={{
                                  width: "100%", padding: "12px 16px", borderRadius: 8, background: "rgba(0,0,0,0.2)",
                                  border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none",
                                  boxSizing: "border-box", cursor: "pointer"
                                }}
                                className="focus-ring"
                              >
                                <option style={{ background: "#1e1e1e" }}>Indoor</option>
                                <option style={{ background: "#1e1e1e" }}>Outdoor</option>
                                <option style={{ background: "#1e1e1e" }}>Rental</option>
                                <option style={{ background: "#1e1e1e" }}>Custom</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              Requirements
                            </label>
                            <textarea
                              rows={3}
                              placeholder="Tell us about your project..."
                              style={{
                                width: "100%", padding: "12px 16px", borderRadius: 8, background: "rgba(0,0,0,0.2)",
                                border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none",
                                boxSizing: "border-box", resize: "none"
                              }}
                              className="focus-ring"
                            />
                          </div>
                        </div>

                        <button
                          disabled={formStep === "submitting"}
                          type="submit"
                          style={{
                            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px",
                            borderRadius: 8, background: "#fff", color: "var(--brand)", fontWeight: 600, fontSize: 16,
                            border: "none", cursor: formStep === "submitting" ? "not-allowed" : "pointer", marginTop: 8,
                            opacity: formStep === "submitting" ? 0.7 : 1, transition: "background 0.2s"
                          }}
                          className="hover-bg-gray-100"
                        >
                          {formStep === "submitting" ? (
                             <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                               <span className="spinner-border" style={{ width: 16, height: 16, border: "2px solid var(--brand)", borderTopColor: "transparent", borderRadius: "50%" }}></span>
                               Sending...
                             </span>
                          ) : "Submit Request"}
                        </button>
                        
                        <p style={{ fontSize: 12, textAlign: "center", color: "rgba(255,255,255,0.6)", margin: "16px 0 0 0" }}>
                          By submitting, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style>{`
        .hidden-sm { display: block; }
        .hover-opacity:hover { opacity: 0.9; }
        .hover-bg-white-20:hover { background: rgba(255,255,255,0.2) !important; }
        .hover-bg-white-30:hover { background: rgba(255,255,255,0.3) !important; }
        .hover-bg-gray-100:hover { background: #f3f4f6 !important; }
        .focus-ring:focus { border-color: #fff !important; box-shadow: 0 0 0 2px rgba(255,255,255,0.2) !important; }
        
        .modal-inner { flex-direction: row; }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner-border {
          animation: spin 1s linear infinite;
        }

        @media (max-width: 768px) {
          .hidden-sm { display: none; }
          .modal-wrapper { padding: 0 !important; }
          .modal-content { border-radius: 0 !important; }
          .modal-inner { flex-direction: column !important; }
          .modal-left { padding: 32px 24px !important; }
          .modal-right { padding: 24px 16px !important; background: rgba(0,0,0,0.1); }
        }
        @media (min-width: 769px) {
          .modal-wrapper { padding: 16px !important; }
          .modal-content { border-radius: 24px !important; }
        }
      `}</style>
    </>
  );
}
