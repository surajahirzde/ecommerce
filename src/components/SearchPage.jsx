import { useContext, useEffect, useState } from "react";
import { GlobalData } from "../helper/GlobalData";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import "./style/searchPage.css";
import { IoMdShareAlt } from "react-icons/io";
const SearchPage = () => {
  const { userdata } = useContext(GlobalData);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    setLoading(true);
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${id}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "32cf5737e2msh7b20ac2ddd36c99p1c4c91jsnc099cd7dcb1a",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        data.status === "OK" && setProducts(data.data.products);
        localStorage.setItem("product", JSON.stringify(products));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const addToCart = (id) => {
    if (userdata?.Email) {
      const Fav =
        JSON.parse(localStorage.getItem("cartItem" + userdata.Email)) || [];
      const newFav = [...Fav, id];
      localStorage.setItem("cartItem" + userdata.Email, JSON.stringify(newFav));
    } else {
      const Fav = JSON.parse(localStorage.getItem("cartItem")) || [];
      const newFav = [...Fav, id];
      localStorage.setItem("cartItem", JSON.stringify(newFav));
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <main className="searchPage top">
      <h1>
        Serach Result for :{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>{id}</span>
      </h1>
      <div className="productContainer">
        {products.length > 0 && !loading ? (
          products.map((product, index) => {
            return (
              <div key={index} className="product">
                <div
                  className="shareBtn"
                  onClick={() => {
                    navigator.share({
                      title: product.product_title,
                      text: "Check out this awesome Product",
                      url: window.location.href,
                    });
                  }}
                >
                  <IoMdShareAlt />
                </div>
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
                  <button
                    className="addToCart"
                    onClick={(e) => {
                      addToCart(product);
                      e.target.textContent = "added to cart";
                      e.target.disabled = true;
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="loader">Loading... </h2>
        )}
      </div>
    </main>
  );
};

export default SearchPage;
