import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        display: "flex", width: 64, height: 32, padding: 4, borderRadius: 999,
        cursor: "pointer", transition: "all 0.3s", boxSizing: "border-box",
        background: isDark ? "var(--bg-secondary)" : "#fff",
        border: "1px solid",
        borderColor: isDark ? "var(--border-color)" : "#e4e4e7"
      }}
      className={className}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Toggle Theme"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative" }}>
        
        {/* Sliding Indicator and First Icon */}
        <div
          style={{
            display: "flex", justifyContent: "center", alignItems: "center", width: 24, height: 24,
            borderRadius: 999, transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s",
            transform: isDark ? "translateX(0)" : "translateX(32px)",
            background: isDark ? "var(--bg-primary)" : "#e5e7eb",
            position: "absolute", zIndex: 2
          }}
        >
          {isDark ? (
            <Moon size={14} color="#fff" strokeWidth={1.5} />
          ) : (
            <Sun size={14} color="#374151" strokeWidth={1.5} />
          )}
        </div>

        {/* Opposite side background icon (Sun in Dark, Moon in Light) */}
        <div
          style={{
            display: "flex", justifyContent: "center", alignItems: "center", width: 24, height: 24,
            borderRadius: 999, transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isDark ? "translateX(32px)" : "translateX(0)",
            background: "transparent",
            position: "absolute", zIndex: 1
          }}
        >
          {isDark ? (
            <Sun size={14} color="var(--text-secondary)" strokeWidth={1.5} />
          ) : (
            <Moon size={14} color="#111" strokeWidth={1.5} />
          )}
        </div>

      </div>
    </div>
  );
}
