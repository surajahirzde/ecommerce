import { useContext } from "react";
import { GlobalData } from "../helper/GlobalData";
import "./style/searchPage.css";
import { FaStar } from "react-icons/fa6";
const Cart = () => {
  const { userdata } = useContext(GlobalData);
  const cart = userdata?.Email
    ? JSON.parse(localStorage.getItem(`cartItem${userdata?.Email}`))
    : JSON.parse(localStorage.getItem(`cartItem`));

  return (
    <main className="top searchPage">
      <h2 style={{textAlign:"center"}}>Your Cart Items</h2>
      <div className="productContainer">
        {cart.length > 0 ? (
          cart.map((product, index) => {
            return (
              <div key={index} className="product">
                <div className="imageContainer">
                  <img
                    src={product.product_photo}
                    alt={product.product_title}
                  />
                </div>
                <div className="productInfo">
                  <h2
                    dangerouslySetInnerHTML={{ __html: product.product_title }}
                  ></h2>
                  <p className="price">
                    <strike style={{ opacity: "0.7" }}>
                      {product.product_original_price}
                    </strike>
                    / <strong>{product.product_price}</strong>
                  </p>
                  <p className="rating" style={{ color: "orange" }}>
                    {product.product_star_rating}
                    <FaStar /> / 5
                  </p>
                  <p>{product.sales_volume}</p>
                  <p style={{ color: "green" }}>
                    {product.delivery?.replace("Amazon", "FlipKart")}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Item Found</h3>
        )}
      </div>
    </main>
  );
};

export default Cart;
