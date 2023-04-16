import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.js";
import Products from "./pages/Products";
import About from "./pages/About.js";
import Error from "./pages/Error";

export default function App() {
  return (
    <>
      <nav> Our Navbar</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>footer</footer>
    </>
  );
}
