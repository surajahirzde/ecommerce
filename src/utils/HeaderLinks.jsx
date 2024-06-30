import groceryImg from "../assets/grocery.webp";
import electronicsImg from "../assets/electronics.webp";
import fashionImg from "../assets/fashion.webp";
import furnitureImg from "../assets/furniture.webp";
import applianceImg from "../assets/appliance.webp";
import kidsImg from "../assets/kids.webp";
import mobileImg from "../assets/mobiles.webp";
import travelImg from "../assets/travel.webp";
import { Link } from "react-router-dom";
import "./styles/headerLinks.css";
const HeaderLinks = () => {
  const Links = [
    {
      name: "Grocery",
      img: groceryImg,
    },
    {
      name: "Electronics",
      img: electronicsImg,
    },
    {
      name: "Fashion",
      img: fashionImg,
    },
    {
      name: "Furniture",
      img: furnitureImg,
    },
    {
      name: "Appliances",
      img: applianceImg,
    },
    {
      name: "Kids",
      img: kidsImg,
    },
    {
      name: "Mobile",
      img: mobileImg,
    },
    {
      name: "Travel",
      img: travelImg,
    },
  ];
  return (
    <div className="wrapper">
      <div className="header-link">
        {Links.map((link, index) => {
          return (
            <Link to={`/search/${link.name}`} className="link" key={index}>
              <div className="imgContainer">
                <img src={link.img} alt={link.name} />
              </div>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderLinks;
