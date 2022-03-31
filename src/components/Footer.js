import React from "react"

const Footer = () => {
    return (
      <div>
        {/* <!-- footer --> */}
  <footer className="footer">
    <p> Copyright &copy; 2022 Alondra Ramirez for Road to Hire e-Commerce Project: Version 2</p>
    {/* <!--logo--> */}
    <div className="gridItem"><img src="/images/logo.png" alt="logo" style={{width: "100px", height:"100px"}}/>
    </div>
    <p>
      <a href="https://www.facebook.com" className="fa fa-facebook" target="_blank" rel="noopener"></a>
      <a href="https://twitter.com" className="fa fa-twitter" target="_blank" rel="noopener"></a>
      <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" rel="noopener"></a>
      <a href="https://google.com" className="fa fa-google" target="_blank" rel="noopener"></a>
    </p>
  </footer>
      </div>
    )
  }
  
  export default Footer;