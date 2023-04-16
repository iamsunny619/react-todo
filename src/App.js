import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.js";
import Products from "./pages/Products";
import About from "./pages/About.js";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import PrimaryLayout from "./components/PrimaryLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
