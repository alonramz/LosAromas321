import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./views/ContactUs.js";
import Checkout from "./views/Checkout.js";
import Products from "./views/Products.js";
import Home from "./views/Home";
import products from "./data.json";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Nav />


      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
