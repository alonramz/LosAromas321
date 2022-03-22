import React from "react";
import "./ContactUs.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div className="Contact">
      <Nav />

      <header>Contact Us</header>

      <div className="left-sidebar">We would love to hear from you!</div>

      <main>
        <div className="contactRow">
          <div className="contactColumn">
            <img
              src="/images/home2.png"
              alt="contact"
              style={{ maxWidth: "100vh", height: "auto" }}
            />
          </div>

          <div className="contactColumn">
            <form action="action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label for="lname">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
              />

              <label for="lname">Favorite Scents</label>
              <input
                type="text"
                id="scents"
                name="scents"
                placeholder="Earthy, Floral, Sweet,"
              />

              <label for="subject">Comments</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="I love Los Aromas Candles..."
                style={{ height: "200px" }}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </main>

      <div className="rightSidebar">
        Now offering custom-made orders. Bring your own jar, request a scent or
        customize a logo
      </div>

      <Footer />
      
    </div>
  );
}

export default ContactUs;
