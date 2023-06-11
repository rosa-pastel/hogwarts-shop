import { useParams } from "react-router-dom";

const ProductPage = ({ setCart, cart, products, displayCart }) => {
  const { id } = useParams();
  const product = products.find((p) => {
    return p.id === parseInt(id);
  });
  function addToCart() {
    let found = 0;
    cart.map((p, i) => {
      if (p.id === product.id) {
        let cartUpdated = cart.slice();
        cartUpdated[i] = {
          ...p,
          amount: p.amount + 1,
          subtotal: p.price * (p.amount + 1),
        };
        setCart(cartUpdated);
        found = 1;
      }
    });
    if (!found)
      setCart([...cart, { ...product, amount: 1, subtotal: product.price }]);
    displayCart();
  }
  return (
    <div className="ProductPage">
      {product && (
        <div className="Product">
          <div>
            <h1>{product.title}</h1>
            <img src={product.imgSrc} alt="product"></img>
          </div>
          <div>
            <p>{product.info}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductPage;
