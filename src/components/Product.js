import React from "react";

function Product({productObj}) {
  return (
    <div className="productContainers">
      <div className="imageWrapper">
        <img
          src={productObj.imgSrc}
          alt={productObj.title}
          style={{ maxWidth: "100%", height: "auto" }}
          className="image"
        />
        <p>
          <strong>{productObj.title}</strong> <br />
          {productObj.content}
          <br />
          {productObj.size} <br />
          <br />
        </p>
        <div className="middle">
          <p>
            {productObj.top}<br />
            {productObj.middle} <br />
            {productObj.base}
          </p>
          <em>{productObj.price}</em>
        </div>
      </div>
      <form style={{ display: "inline" }} action="checkout.html" method="get">
        <button className="buttonButton1">Buy Now</button>
      </form>
    </div>
  );
}

export default Product;
