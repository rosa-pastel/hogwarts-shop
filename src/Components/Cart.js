import { useState } from "react";

const Cart = ({ cart, setCart, rightspace, setRightSpace }) => {
  function closeCart() {
    setRightSpace("-300px");
  }
  let getTotal = () => cart.reduce((acc, item) => acc + item.subtotal, 0);
  function increaseAmount(id) {
    let updatedCart = cart.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          amount: p.amount + 1,
          subtotal: p.price * (p.amount + 1),
        };
      }
      return p;
    });
    setCart(updatedCart);
  }
  function decreaseAmount(id) {
    let decreased = 0;
    let updatedCart = cart.map((p) => {
      if (p.id === id) {
        if (p.amount === 1) deleteItem(id);
        else {
          decreased = 1;
          return {
            ...p,
            amount: p.amount - 1,
            subtotal: p.price * (p.amount - 1),
          };
        }
      }
      return p;
    });
    if (decreased) setCart(updatedCart);
  }
  function deleteItem(id) {
    let updatedCart = cart.slice();
    cart.map((p, i) => {
      if (p.id === id) {
        updatedCart.splice(i, 1);
      }
    });
    setCart(updatedCart);
  }
  return (
    <div className="Cart" style={{ right: rightspace }}>
      <div>
        <h1>Cart</h1>
        <h2 onClick={closeCart}>x</h2>
      </div>
      {cart.map((item) => {
        return (
          <div key={item.id} className="item">
            <h1>{item.title}</h1>
            <div>
              <div>
                <img src={item.imgSrc} alt="item"></img>
              </div>
              <div>
                <h1 className="subtotal">{item.subtotal}</h1>
                <div className="amount">
                  <h2>{item.amount}</h2>
                  <button onClick={() => decreaseAmount(item.id)}>-</button>
                  <button onClick={() => increaseAmount(item.id)}>+</button>
                </div>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
      <h1 className="total">{getTotal()}</h1>
      <button>Checkout</button>
    </div>
  );
};
export default Cart;
