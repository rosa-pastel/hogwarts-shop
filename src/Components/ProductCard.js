import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, imgSrc, id, price }) => {
  const navigate = useNavigate();
  function goToProduct() {
    navigate(`/Product/${id}`);
  }
  return (
    <div
      className="ProductCard"
      id={id}
      key={id}
      onClick={(e) => goToProduct()}
    >
      <h1>{title}</h1>
      <img src={imgSrc} alt="Product"></img>
      <h2>{price}</h2>
    </div>
  );
};
export default ProductCard;
