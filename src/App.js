import "./App.css";
import React, { useState } from "react";
import blueElixir from "./Pictures/Products/blue-elixir.png";
import purpleElixir from "./Pictures/Products/purple-elixir.png";
import greenElixir from "./Pictures/Products/green-elixir.png";
import yellowElixir from "./Pictures/Products/yellow-elixir.png";
import loveElixir from "./Pictures/Products/love-elixir.png";
import redElixir from "./Pictures/Products/red-elixir.png";
import Homepage from "./Components/Homepage";
import Emporium from "./Components/Emporium";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPage from "./Components/ProductPage";

function App() {
  const [rightSpaceCart, setRightSpaceCart] = useState("-300px");
  function displayCart() {
    setRightSpaceCart("0px");
  }
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Veritaserum",
      info: "Forces the taker to tell the truth.",
      imgSrc: blueElixir,
      amount: 0,
      price: 10.5,
      subtotal: 0,
    },
    {
      id: 2,
      title: "Skele-Gro",
      info: "Regrows missing bones.",
      imgSrc: redElixir,
      amount: 0,
      price: 8,
      subtotal: 0,
    },
    {
      id: 3,
      title: "Polyjuice Potion",
      info: "Temporarily transforms the drinker into another person. The drinker will take on the appearance of the person whose hair, fingernails, etc., are added to the potion. Not to be used for transforming into an animal.",
      imgSrc: greenElixir,
      amount: 0,
      price: 18,
      subtotal: 0,
    },
    {
      id: 4,
      title: "Felix Felicis",
      info: "A magical potion that makes the taker successful in all their endeavours.",
      imgSrc: purpleElixir,
      amount: 0,
      price: 20,
      subtotal: 0,
    },
    {
      id: 5,
      title: "Amortentia",
      info: "The world's strongest Love Potion; does not create real love, just powerful obsession.",
      imgSrc: loveElixir,
      amount: 0,
      price: 12,
      subtotal: 0,
    },
    {
      id: 6,
      title: "Draught of Peace",
      info: "A potion that relieves anxiety.",
      imgSrc: yellowElixir,
      amount: 0,
      price: 8,
      subtotal: 0,
    },
  ]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar
        cart={cart}
        setCart={setCart}
        setRightSpaceCart={setRightSpaceCart}
        rightSpaceCart={rightSpaceCart}
        displayCart={displayCart}
      ></NavBar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/Emporium"
          element={<Emporium products={products} setProducts={setProducts} />}
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/Product/:id"
          element={
            <ProductPage
              cart={cart}
              setCart={setCart}
              products={products}
              displayCart={displayCart}
            ></ProductPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
