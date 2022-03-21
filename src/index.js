import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Nav from './components/Nav.js';
// import Slider from './components/Slider/Slider.js';
import Footer from './components/Footer.js';
import Products from './views/Products';

export {
  Nav,
  Footer,
  Products
}

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)

