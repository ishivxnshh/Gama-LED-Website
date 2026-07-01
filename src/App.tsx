import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productType" element={<Products />} />
        <Route path="/products/:productType/:series" element={<Products />} />
        <Route path="/products/:productType/:series/:product" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
