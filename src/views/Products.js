import React from "react";
import productList from "../data.json";
// import Product from "../components/Product";
import "./Products.css";
// import '../App.css';
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";
import {useState} from 'react' 

function Products() {
  //want to search the term with input and give string
  const [searchTerm, setSearchTerm] = useState('')
  return (
    // {productList.map((p) => (
    //   <Product key={p.id} productObj={p} />
    // ))}

    <div className="Products">
      <Nav />
      <header>Candles</header>

      {/* <Product /> */}

      {/* search bar, has an id and key from data.json */}
      <input type="text" placeholder="Search a scent..." onChange={event => {setSearchTerm(event.target.value)}}/>
      {/* setSearchTerm is assinged to whatver value is being searched */}
      {productList.filter((id) => {
        // filter method to fither out what we are searching for
        if(searchTerm === "") {
          return id
        }else if (id.scent.toLowerCase().includes(searchTerm.toLowerCase())) {
          return id
        }
      }).map((id, key) => {
        return (
          <div className="searchItems" key={key}>
            <p className="scents">{id.scent} </p>
          </div>
        );
      })}

      <main>
        <div className="productRows">
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/6.png"
                alt="touchoffall"
                style={{ maxWidth: "100%", height: "auto" }}
                class="image"
              />
              <p>
                <strong>Touch of Fall</strong> <br />
                Vanilla Pumpkin Marshmallow
                <br />
                8 oz <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Sweet Cream <br />
                  Middle: Pumpkin <br />
                  Base: Bakery Spice
                </p>
                <em>$10</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/7.png"
                alt="innovative"
                style={{ maxWidth: "100%", height: "auto" }}
                class="image"
              />
              <p>
                <strong>Innovative</strong> <br />
                Grapefruit Mango <br />
                8 oz <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Orange, Mandarin, Lemon <br />
                  Middle: Grapefruit, Peach <br />
                  Base: Red Currant, Vanilla
                </p>
                <em>$10</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/9.png"
                alt="admirer"
                style={{ maxWidth: "100%", height: "auto" }}
                class="image"
              />
              <p>
                <strong>Admirer</strong> <br />
                Black Sea <br />
                8 oz <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Sea Salt, Citrus <br />
                  Middle: Cardamom, Plum <br />
                  Base: Dark Musk, Amber
                </p>
                <em>$10</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
        </div>

        <div className="productRows">
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/1.png"
                alt="romance"
                style={{ maxWidth: "100%", height: "auto" }}
                class="image"
              />
              <p>
                <strong>Romance</strong> <br />
                Amber Romance (VS Perfume) <br />
                10 oz <br />
                <br />
              </p>
              <div className="productMiddle">
                <p>
                  Top: Musk <br />
                  Middle: Water Floral <br />
                  Base: Vanilla, Sandalwood,
                </p>
                <em>$15</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/2.png"
                alt="daylight"
                style={{ maxWidth: "100%", height: "auto" }}
                class="image"
              />
              <p>
                <strong>Daylight</strong> <br />
                Fruit Slices <br />
                10oz <br />
                <br />
              </p>
              <div className="productMiddle">
                <p>
                  Top: Fruity <br />
                  Middle: Tropical, Exotic <br />
                  Base: Driftwood
                </p>
                <em>$15</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/3.png"
                alt="comfort"
                style={{ maxWidth: "100%", height: "auto" }}
                className="image"
              />
              <p>
                <strong>Comfort</strong> <br />
                Black Raspberry Vanilla <br />
                10oz <br />
                <br />
              </p>
              <div className="productMiddle">
                <p>
                  Top: Cirtus, Raspberry <br />
                  Middle: Blackberry <br />
                  Base: Vanilla
                </p>
                <em>$15</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
        </div>

        {/* <!-- 10oz --> */}
        <div className="productRows">
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/5.png"
                alt="determined"
                style={{ maxWidth: "100%", height: "auto" }}
                class="image"
              />
              <p>
                <strong>Determined</strong> <br />
                Tobacco Bay Leaf <br />
                10oz <br />
                <br />
              </p>
              <div className="productMiddle">
                <p>
                  Top: Citrus <br />
                  Middle: Florals <br />
                  Base: Cedar, Musk, Sandalwood
                </p>
                <em>$15</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/4.png"
                alt="infusion"
                style={{ maxWidth: "100%", height: "auto" }}
                className="image"
              />
              <p>
                <strong>Infusion</strong> <br />
                White Tea <br />
                10oz <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Lemon, Mandarin <br />
                  Middle: Ginger, Bergamot <br />
                  Base: White Tea, Jasmine
                </p>
                <em>$15</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/8.png"
                alt="Euphoric"
                style={{ maxWidth: "100%", height: "auto" }}
                className="image"
              />
              <p>
                <strong>Euphoric</strong> <br />
                Tobacco Caramel <br />
                10oz <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Orange <br />
                  Middle: Tobacco Leaf, Lavender, Wood, Patchouli <br />
                  Base: Caramelized Vanilla, Musk
                </p>
                <em>$15</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
        </div>

        <div className="rightSidebar2">
          <strong>Limited Time </strong>
        </div>

        {/* <!--holiday edition--> */}
        <div className="productRows">
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/11.png"
                alt="white sage"
                style={{ maxWidth: "100%", height: "auto" }}
                className="image"
              />
              <p>
                <strong>Holiday Edition</strong> <br />
                White Sage Lavender <br />
                11 oz <br />
                Create your own <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Eucalyptus, Pine <br />
                  Middle: Rosemary, Floral
                  <br />
                  Base: Cedar, Sage
                </p>
                <em>$15</em> <br />
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/12.png"
                alt="cocoshell"
                style={{ maxWidth: "100%", height: "auto" }}
                className="image"
              />
              <p>
                <strong>Coconut Shell</strong> <br />
                Mahogany Teakwood <br />
                12 oz <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Lavender <br />
                  Middle: Rosemary, Sage, Chamomile <br />
                  Base: Ceder, Sandalwood
                </p>
                <em>$20</em>
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
          <div className="productContainers">
            <div className="imageWrapper">
              <img
                src="/images/10.png"
                alt="merlot"
                style={{ maxWidth: "100%", height: "auto" }}
                className="image"
              />
              <p>
                <strong>Holiday Edition</strong> <br />
                Black Cherry Merlot <br />
                11 oz <br />
                Create your own <br />
                <br />
              </p>
              <div className="productmiddle">
                <p>
                  Top: Black Currant <br />
                  Middle: Clove, Red Wine, Black Cherry <br />
                  Base: Amber, Vanilla, Oak
                </p>
                <em>$15</em> <br />
              </div>
            </div>
            <form
              style={{ display: "inline" }}
              action="checkout.html"
              method="get"
            >
              <button className="buttonButton1">Buy Now</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Products;
