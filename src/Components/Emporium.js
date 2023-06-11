import ProductCard from "./ProductCard";
const Emporium = ({ products }) => {
  return (
    <div className="Emporium">
      <div className="products">
        {products.map((product) => {
          return (
            <ProductCard
              title={product.title}
              imgSrc={product.imgSrc}
              price={product.price}
              id={product.id}
              key={product.id}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
};
export default Emporium;
