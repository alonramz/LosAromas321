import React from "react";
import "./Checkout.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <div className="Checkout">
      <Nav />

      <main>
        <h2>Checkout</h2>
        <p>Online payments coming soon!</p>
        <div className="checkoutRow">
          <div className="col-1">
            <div className="checkoutContainer">
              <form action="/action_page.php">
                <div className="checkoutRow">
                  <div className="col-2">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <label for="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="email@example.com"
                    />
                    <label for="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      nameName="address"
                      placeholder="123 W. Street"
                    />
                    <label for="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Charlotte"
                    />

                    <div className="checkoutRow">
                      <div className="col-2">
                        <label for="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="NC"
                        />
                      </div>
                      <div className="col-2">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="28210"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-2">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i
                        className="fa fa-cc-visa"
                        style={{ color: "navy" }}
                      ></i>
                      <i
                        className="fa fa-cc-amex"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fa fa-cc-discover"
                        style={{ color: "orange" }}
                      ></i>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="Fat Stacks"
                    />
                    <label for="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label for="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="April"
                    />
                    <div className="checkoutRow">
                      <div className="col-2">
                        <label for="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2019"
                        />
                      </div>
                      <div className="col-2">
                        <label for="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" checked="checked" name="sameadr" />{" "}
                  Shipping address same as billing
                </label>
                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                />
              </form>
            </div>
          </div>
          <div className="col-3">
            <div className="checkoutContainer">
              <h4>
                Cart{" "}
                <span class="price" style={{ color: "black" }}>
                  <i class="fa fa-shopping-cart"></i> <b>4</b>
                </span>
              </h4>
              <p>
                <a href="/">Product 1</a> <span className="price">$15</span>
              </p>
              <p>
                <a href="/">Product 2</a> <span className="price">$15</span>
              </p>
              <p>
                <a href="/">Product 3</a> <span className="price">$10</span>
              </p>
              <p>
                <a href="/">Product 4</a> <span className="price">$10</span>
              </p>
              <hr />
              <p>
                Total{" "}
                <span class="price" style={{ color: "black" }}>
                  <b>$50</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
