import React from "react";
import productList from "../data.json";
import Product from "../components/Product";
import "./Products.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";
import { useState, useEffect } from "react"; //useeffect allows to fetch api of my products
import axios from "axios";

function Products() {
  //fetch products with local host api
  const [products, setProducts] = useState([]);
  //usestate for text
  const [text, setText] = useState('')
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios("http://localhost:3001/products");
      // response = await response.json();
      console.log(response);
      setProducts(response.id.id);
    }
    //call async function
    console.log("im using useeffect");
    getProducts();
  }, [])

  return (
    <div className="Products">
      <Nav />
      <header>Candles</header>

      <main>
        <div className="productRows">
          {productList.map((p) => {
            return <Product productObj={p} />;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Products;

