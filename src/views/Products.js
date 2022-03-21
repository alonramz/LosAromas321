import React from 'react';
import productList from '../data.json';
import Product from '../components/Product';
// import './Products.css';

function Products() {
  // console.log(productList);
  return (
<div className='Products'>

  <header>
    Candles
  </header>

  <main>
    {/* <!--grid row images--> */}
    <div className="row">
      {
        productList.map(p => <Product key={p.id} productObj={p} />)
      } 
    </div>

    {/* <!-- last section 8oz --> */}
    <div className="row">


      {/* <div className="containers">
        <div className="imageWrapper">
          <img src="1.png" alt="romance" style={{maxWidth: "100%", height:"auto"}} class="image"/>
          <p><strong>Romance</strong> <br/>
            Amber Romance (VS Perfume) <br/>
            10 oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Musk <br/>
              Middle: Water Floral <br/>
              Base: Vanilla, Sandalwood,
            </p>
            <em>$15</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
      <div className="containers">
        <div className="imageWrapper">
          <img src="2.png" alt="daylight" style={{maxWidth:"100%", height: "auto"}} className="image"/>
          <p><strong>Daylight</strong> <br/>
            Fruit Slices <br/>
            10oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Fruity <br/>
              Middle: Tropical, Exotic <br/>
              Base: Driftwood
            </p>
            <em>$15</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
      <div className="containers">
        <div className="imageWrapper">
          <img src="3.png" alt="comfort" style={{maxWidth:"100%", height: "auto"}} className="image"/>
          <p><strong>Comfort</strong> <br/>
            Black Raspberry Vanilla <br/>
            10oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Cirtus, Raspberry <br/>
              Middle: Blackberry <br/>
              Base: Vanilla
            </p>
            <em>$15</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div> */}
    </div>
    {/* <!-- 10oz --> */}
    <div className="row">
      {/* <div className="containers">
        <div className="imageWrapper">
          <img src="5.png" alt="determined" style={{maxWidth:"100%", height:"auto"}} class="image"/>
          <p><strong>Determined</strong> <br/>
            Tobacco Bay Leaf <br/>
            10oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Citrus <br/>
              Middle: Florals <br/>
              Base: Cedar, Musk, Sandalwood
            </p>
            <em>$15</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
      <div className="containers">
        <div className="imageWrapper">
          <img src="4.png" alt="infusion" style={{maxWidth:"100%", height: "auto"}} className="image"/>
          <p><strong>Infusion</strong> <br/>
            White Tea <br/>
            10oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Lemon, Mandarin <br/>
              Middle: Ginger, Bergamot <br/>
              Base: White Tea, Jasmine
            </p>
            <em>$15</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
      <div className="containers">
        <div className="imageWrapper">
          <img src="8.png" alt="Euphoric" style={{maxWidth: "100%", height:"auto"}} className="image"/>
          <p><strong>Euphoric</strong> <br/>
            Tobacco Caramel <br/>
            10oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Orange <br/>
              Middle: Tobacco Leaf, Lavender, Wood, Patchouli <br/>
              Base: Caramelized Vanilla, Musk
            </p>
            <em>$15</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div> */}
    </div>


    <div className="rightSidebar2">
      <strong>Limited Time </strong>
    </div>

    {/* <!--holiday edition--> */}
    <div className="row">
      <div className="containers">
        <div className="imageWrapper">
          <img src="11.png" alt="white sage" style={{maxWidth:"100%", height: "auto"}} className="image"/>
          <p><strong>Holiday Edition</strong> <br/>
            White Sage Lavender <br/>
            11 oz <br/>
            Create your own <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Eucalyptus, Pine <br/>
              Middle: Rosemary, Floral<br/>
              Base: Cedar, Sage
            </p>
            <em>$15</em> <br/>
          </div>
        </div>
        <form style={{display: "inline"}}action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
      <div className="containers">
        <div className="imageWrapper">
          <img src="12.png" alt="cocoshell" style={{maxWidth:"100%",height:"auto"}} className="image"/>
          <p><strong>Coconut Shell</strong> <br/>
            Mahogany Teakwood <br/>
            12 oz <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Lavender <br/>
              Middle: Rosemary, Sage, Chamomile <br/>
              Base: Ceder, Sandalwood
            </p>
            <em>$20</em>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
      <div className="containers">
        <div className="imageWrapper">
          <img src="10.png" alt="merlot" style={{maxWidth: "100%", height:"auto"}} className="image"/>
          <p><strong>Holiday Edition</strong> <br/>
            Black Cherry Merlot <br/>
            11 oz <br/>
            Create your own <br/>
            <br/></p>
          <div className="middle">
            <p>
              Top: Black Currant <br/>
              Middle: Clove, Red Wine, Black Cherry <br/>
              Base: Amber, Vanilla, Oak
            </p>
            <em>$15</em> <br/>
          </div>
        </div>
        <form style={{display: "inline"}} action="checkout.html" method="get">
          <button className="buttonButton1">Buy Now</button>
        </form>
      </div>
    </div>
  </main>
</div>

  );
}

export default Products;
