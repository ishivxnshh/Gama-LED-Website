import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useTheme } from "../context/ThemeContext";

interface SaveButtonProps {
  text?: {
    idle?: string;
    saving?: string;
    saved?: string;
  };
  className?: string;
  onSave?: () => Promise<void> | void;
}

export function AnimatedHeroButton({
  text = {
    idle: "Start your journey",
    saving: "Preparing...",
    saved: "Let's Go!"
  },
  className = "",
  onSave
}: SaveButtonProps) {
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [bounce, setBounce] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSave = async () => {
    if (status === "idle") {
      setStatus("saving");
      try {
        if (onSave) {
          await onSave();
        } else {
          // Simulate action if onSave is not provided
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        setStatus("saved");
        setBounce(true);

        setTimeout(() => {
          setStatus("idle");
          setBounce(false);
        }, 2000);
      } catch (error) {
        setStatus("idle");
        console.error("Action failed:", error);
      }
    }
  };

  const buttonVariants = {
    idle: {
      backgroundColor: "var(--brand)",
      color: "#fff",
      scale: 1,
      boxShadow: "0 4px 14px 0 rgba(225, 29, 72, 0.39)",
    },
    saving: {
      backgroundColor: "var(--brand)",
      color: "white",
      scale: 1,
    },
    saved: {
      backgroundColor: "#22c55e",
      color: "white",
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.2,
        times: [0, 0.5, 1],
      },
    },
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <div className={`relative ${className}`} style={{ position: "relative", display: "inline-block" }}>
      <style>{`
        .animated-hero-btn {
          position: relative;
          display: grid;
          overflow: hidden;
          border-radius: 9999px;
          padding: 16px 32px;
          font-size: 18px;
          font-weight: 700;
          transition: all 0.2s;
          min-width: 250px;
          cursor: pointer;
          border: none;
          outline: none;
        }
        .animated-hero-btn:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }
        .animated-hero-btn.idle-shadow {
          box-shadow: inset 0 1000px 0 0 hsl(0, 0%, 85%);
        }
        [data-theme="dark"] .animated-hero-btn.idle-shadow {
          box-shadow: inset 0 1000px 0 0 hsl(0, 0%, 20%);
        }

        .spark-wrapper {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          animation: flip-steps 6s infinite steps(2, end);
          overflow: hidden;
          border-radius: 9999px;
          mask: linear-gradient(black, transparent 50%);
          -webkit-mask: linear-gradient(black, transparent 50%);
        }
        [data-theme="dark"] .spark-wrapper {
          mask: linear-gradient(white, transparent 50%);
          -webkit-mask: linear-gradient(white, transparent 50%);
        }

        .spark-wrapper::before {
          content: "";
          position: absolute;
          aspect-ratio: 1/1;
          width: 200%;
          background: conic-gradient(from 0deg, transparent 0 340deg, rgba(255,255,255,0.8) 360deg);
          transform: rotate(-90deg);
          animation: rotate-spin 3s linear infinite both;
          inset: 0 auto auto 50%;
          translate: -50% -15%;
        }
        [data-theme="dark"] .spark-wrapper::before {
          background: conic-gradient(from 0deg, transparent 0 340deg, #fff 360deg);
        }

        .btn-backdrop {
          position: absolute;
          inset: 1px;
          border-radius: 9999px;
          transition: background-color 0.2s;
        }
        .btn-backdrop.idle-bg {
          background-color: var(--brand);
        }
        .animated-hero-btn:hover .btn-backdrop.idle-bg {
          background-color: var(--brand-dark);
        }
        [data-theme="dark"] .btn-backdrop.idle-bg {
          background-color: var(--brand);
        }
        [data-theme="dark"] .animated-hero-btn:hover .btn-backdrop.idle-bg {
          background-color: var(--brand-dark);
        }

        @keyframes flip-steps {
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-spin {
          to { transform: rotate(90deg); }
        }
        @keyframes spin-loader {
          to { transform: rotate(360deg); }
        }
        .spin-loader-icon {
          animation: spin-loader 1s linear infinite;
        }
      `}</style>

      <motion.button
        onClick={handleSave}
        animate={status}
        variants={buttonVariants}
        className={`animated-hero-btn group ${status === "idle" ? "idle-shadow" : ""}`}
        whileHover={status === "idle" ? { scale: 1.02 } : {}}
        whileTap={status === "idle" ? { scale: 0.98 } : {}}
      >
        {status === "idle" && (
          <span className="spark-wrapper" />
        )}
        
        <span
          className={`btn-backdrop ${status === "idle" ? "idle-bg" : ""}`}
        />
        
        <span style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", gap: 12 }}>
          <AnimatePresence mode="wait">
            {status === "saving" && (
              <motion.span
                key="saving"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Loader2 className="spin-loader-icon" size={20} />
              </motion.span>
            )}
            {status === "saved" && (
              <motion.span
                key="saved"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Check size={20} />
              </motion.span>
            )}
          </AnimatePresence>
          
          <motion.span
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            {status === "idle" ? <>{text.idle} <ArrowRight size={20} /></> : status === "saving" ? text.saving : text.saved}
          </motion.span>
        </span>
      </motion.button>
      
      <AnimatePresence>
        {bounce && (
          <motion.div
            style={{ position: "absolute", top: -8, right: -8, zIndex: 20 }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sparkleVariants}
          >
            <Sparkles size={24} color="#facc15" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
