import PropTypes from "prop-types";
import "./styles/productSlider.css";
import { Link } from "react-router-dom";
const ProductSlider = ({ products, cardName }) => {
  return (
    <section className="productSlider">
      <h2>{cardName}</h2>
      <div className="productContainer">
        {products.map((product, index) => {
          return (
            <Link
              to={`/search/${product.name.trim().replace(/\s/g, "-")}`}
              className="product"
              key={index}
            >
              <div className="imageContainer">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="productName">{product.name}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductSlider;
ProductSlider.propTypes = {
  products: PropTypes.array.isRequired,
  cardName: PropTypes.string.isRequired,
};
