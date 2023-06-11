import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";
import cartIcon from "../Pictures/trunk.png";
const NavBar = ({
  cart,
  setCart,
  displayCart,
  setRightSpaceCart,
  rightSpaceCart,
}) => {
  return (
    <div className="NavBar">
      <div>
        <h1>Hogwarts</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Emporium">Emporium</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <div onClick={displayCart}>
                <img
                  className="cart-icon"
                  src={cartIcon}
                  alt="Shopping Cart"
                ></img>
              </div>
            </li>
          </ul>
        </div>
        <Cart
          setCart={setCart}
          cart={cart}
          rightspace={rightSpaceCart}
          setRightSpace={setRightSpaceCart}
        ></Cart>
      </div>
    </div>
  );
};
export default NavBar;
