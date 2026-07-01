import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/api";

const categories = ["all", "smart-tvs", "air-conditioners", "washing-machines"];

export default function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCat = searchParams.get("category") || "all";

  const handleSetCategory = (cat: string) => {
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };
  useEffect(() => { getProducts().then(setProducts).catch(() => {}); }, []);
  const filtered = activeCat === "all" ? products : products.filter((p) => p.category === activeCat);

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="md-py-20" style={{ padding: "48px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ color: "var(--brand)", fontSize: 12, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>Shop</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginTop: 8, color: "var(--ink)" }}>All Products</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 40 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => handleSetCategory(cat)}
                style={{
                  padding: "10px 20px", fontSize: 12, fontWeight: 700, letterSpacing: "0.025em", textTransform: "uppercase",
                  borderRadius: 999, border: "1px solid", borderColor: activeCat === cat ? "var(--brand)" : "#e2e8f0", cursor: "pointer",
                  background: activeCat === cat ? "var(--brand)" : "#ffffff",
                  color: activeCat === cat ? "#fff" : "#64748b",
                  boxShadow: activeCat === cat ? "0 4px 6px rgba(2, 132, 199, 0.15)" : "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { if (activeCat !== cat) { e.currentTarget.style.background = "#f1f5f9"; e.currentTarget.style.borderColor = "#cbd5e1"; } }}
                onMouseLeave={(e) => { if (activeCat !== cat) { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#e2e8f0"; } }}>
                {cat === "all" ? "All" : cat.replace("-", " ")}
              </button>
            ))}
          </motion.div>

          <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 40 }}>
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>

          {filtered.length === 0 && <div style={{ textAlign: "center", padding: "80px 0", color: "#64748b" }}>No products found.</div>}
        </div>
      </section>
    </main>
  );
}
