import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface B2BProductCardProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
}

export default function ProductCard({ name, description, image, tags, link, index }: B2BProductCardProps) {
  return (
    <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group" style={{ background: "var(--bg-secondary)", borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", height: "100%", cursor: "pointer" }}>
      
      <div style={{ position: "relative", width: "100%", paddingTop: "75%", background: "var(--bg-primary)", overflow: "hidden" }}>
        <img src={image} alt={name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-105" />
      </div>

      <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8, letterSpacing: "-0.01em" }}>
          {name}
        </h3>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {tags.slice(0, 3).map(tag => (
              <span key={tag} style={{ padding: "4px 10px", background: "var(--bg-tertiary)", color: "var(--text-secondary)", fontSize: 11, fontWeight: 600, borderRadius: 999, textTransform: "uppercase" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link to={link} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 24px", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--brand)", fontSize: 13, fontWeight: 700, borderRadius: 999, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em", transition: "all 0.2s" }} className="hover-brand-bg-text-white"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--brand)";
            e.currentTarget.style.borderColor = "var(--brand)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-secondary)";
            e.currentTarget.style.borderColor = "var(--border-color)";
            e.currentTarget.style.color = "var(--brand)";
          }}>
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
