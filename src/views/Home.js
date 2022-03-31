import React from "react";
import "./Home.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

function Main() {
  return (
    <div className="fullHeight">
      {/* <Slider /> */}
      {/* <!-- hero image --> */}
      <div className="hero-image">
        <div className="hero-text">
          <h1>Los Aromas de Alondra</h1>
          <p>Handmade Coconut Wax Candles</p>
          {/* <!--button and link--> */}
          <form
            style={{ display: "inline" }}
            action="/Products"
            method="get"
          >
            <button className="homebutton">Shop Now!</button>
          </form>
        </div>
      </div>

      <Nav />

      <ImageSlider slides={SliderData} />

      <main>
        <div className="rows">
          <div className="side">
            <h2>Let's Get Lit!</h2>
            <p>
              Sometimes all you need is a candle to help you relax, stay calm,
              to study, while getting ready, or after cleaning, and even to
              improve focus. Candles can trigger your brain to a better mindset
              or set a vibe!
            </p>
            <div className="fakeimg">
              <img src="/images/about.png" alt="candles" />
            </div>
            <p>
              Indulge the senses and mix and match glass, ceramic, deluxe and
              luxury candles in your favorite scents.
            </p>
            <h3>Hand Poured</h3>
            <p>
              Your favorite fragrances for all seasons with single or double
              wicks and limited-edition artwork — plus our new holiday
              collection and amazing wax melts, exclusively online! <br />
            </p>
            <div className="fakeimg">
              <img src="/images/lit.png" alt="candles" />
              <img src="/images/melts.png" alt="candles" />
            </div>
          </div>
          <div className="main">
            <h2>PARTY FAVORS</h2>
            <h5>Special Opportunity, Dec 14, 2021</h5>
            <div className="fakeimg">
              <img src="/images/contact.png" alt="candles" />
            </div>
            <p>Loved the way these candles turned out!</p>
            <p>
              We had the opportunity of making 50 mini candles for a quinceañera
              as party favors. These 5 oz minis were so much fun to make and
              smelled amazing! <br />
              <br />
              Scents used: Golden Rose and Sea Salt & Orchid; theme was chosen
              by our customer.
            </p>
            <h2>MOST POPULAR</h2>
            <h5>Top Requested Scents, Nov 18, 2021</h5>
            <div className="fakeimg">
              <img src="/images/basket.png" alt="candles" />
            </div>
            <p>Just a few names of our most popular candles:</p>
            <p>
              Black Raspberry Vanilla, White Tea, Bleu Chanel Cologne, White
              Sage, Peppermint Eucalyptus, Golden Rose, Pumkin Pecan Waffles,
              Lavender, and Black Ice
            </p>
          </div>
        </div>
      </main>

      <section>
        <form action="/action_page.php">
          <div className="sectionContainer">
            <h2>Subscribe to our Newsletter</h2>
            <p>
              Become a subscriber to learn first about exclusive promotions and
              new releases!
            </p>
          </div>

          <div className="containerForms" style={{ backgroundColor: "white" }}>
            <input type="text" placeholder="Name" name="name" required />
            <input
              type="text"
              placeholder="Email address"
              name="mail"
              required
            />
            <label>
              <input type="checkbox" checked="checked" name="subscribe" /> Daily
              Newsletter
            </label>
          </div>

          <div className="sectionContainer">
            <input type="submit" value="Subscribe" required/>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
