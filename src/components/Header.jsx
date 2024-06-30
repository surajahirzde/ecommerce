import "./style/header.css";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import logo from "../assets/fliplogo.png";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalData } from "../helper/GlobalData";

const Header = () => {
  const { userdata, cartItem } = useContext(GlobalData);
  const [cartCount, setCartCount] = useState(cartItem.length || 0);
  const [activeNav, setActiveNav] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const clickHandler = () => {
    setActiveNav((pre) => !pre);
  };
  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  useEffect(() => {
    setCartCount(cartItem.length);
  }, [cartItem]);
  return (
    <header className={activeNav ? "active" : ""}>
      <nav className="parent">
        <Link to={"/"} ><img src={logo} title="Flipkart" /></Link>
        <div className="input">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for products,Brands and More "
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => {
              e.key === "Enter" && navigate(`/search/${inputValue}`);
            }}
          />
        </div>
        <div className="link-group">
          {userdata?.Email ? (
            <div className="avatar">
              <p className="link-1">
                <img
                  src={userdata.media}
                  alt={userdata?.Email?.split("@")[0]}
                />
                <span>Welcome {userdata?.Email?.split("@")[0]} !</span>
              </p>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          ) : (
            <Link to={"/login"} className="login link">
              <span>Login</span>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </Link>
          )}

          <Link to={"/cart"} className="cart link">
            <span>
              <BsCart3 color="#007bd8" />
            </span>
            <span>Cart</span>
            <span className="number">{cartCount}</span>
          </Link>

          <Link to={"/seller"} className="seller link">
            <span>
              <CiShop color="red" />
            </span>
            <span>Become a seller</span>
          </Link>
        </div>
        <div className="dot" onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
