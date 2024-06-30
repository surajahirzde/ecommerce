import "./style/home.css";
import s1 from "../assets/slide2.jpg";
import s2 from "../assets/slode3.jpg";
import s3 from "../assets/slide4.jpg";
import s4 from "../assets/slide5.jpg";
import s5 from "../assets/slide6.jpg";
import HeaderLinks from "../utils/HeaderLinks";
import Slidelink from "../utils/Slidelink";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import e8 from "../assets/e8.png";
import bt1 from "../assets/bt1.png";
import bt2 from "../assets/bt2.png";
import bt3 from "../assets/bt3.png";
import bt4 from "../assets/bt4.png";
import bt5 from "../assets/bt5.png";
import bt6 from "../assets/bt6.png";
import bt7 from "../assets/bt7.png";
import st1 from "../assets/st1.png";
import st2 from "../assets/st2.png";
import st3 from "../assets/st3.png";
import st4 from "../assets/st4.png";
import st5 from "../assets/st5.png";
import st6 from "../assets/st6.png";
import st7 from "../assets/st7.png";
import st8 from "../assets/st8.png";
import ProductSlider from "../utils/ProductSlider";

const Home = () => {
  const images = [s1, s2, s3, s4, s5];
  const electronics = [
    {
      name: "Grooming",
      img: e1,
    },
    {
      name: "Camera",
      img: e2,
    },
    {
      name: "Printer",
      img: e3,
    },
    {
      name: "Smart Tv",
      img: e4,
    },
    {
      name: "Apple Watch",
      img: e5,
    },
    {
      name: "BlueTooth Speaker",
      img: e6,
    },
    {
      name: "Smart Watch",
      img: e7,
    },
    {
      name: "Wireless Earbuda",
      img: e8,
    },
  ];
  const Beautiproducts = [
    {
      name: "Boro Plus",
      img: bt1,
    },
    {
      name: "Oats",
      img: bt2,
    },
    {
      name: "Toys",
      img: bt3,
    },
    {
      name: "Piano",
      img: bt4,
    },
    {
      name: "Microphone",
      img: bt5,
    },
    {
      name: "Peanut Butter",
      img: bt6,
    },
    {
      name: "Puzzle",
      img: bt7,
    },
   
  ];

  const Fashionproducts = [
    {
      name: "Blouse",
      img: st1,
    },
    {
      name: "Suit Salwar",
      img: st2,
    },
    {
      name: "Shirt",
      img: st3,
    },
    {
      name: "Ghagra",
      img: st4,
    },
    {
      name: "Trouser",
      img: st5,
    },
    {
      name: "Shoes",
      img: st6,
    },
    {
      name: "Bag",
      img: st7,
    },
    {
      name: "Jacket",
      img: st8,
    },
   
  ];




  return (
    <main className="top home">
      <HeaderLinks />
      <Slidelink images={images} />
      <ProductSlider cardName="Electronics"  products={electronics} />

      <ProductSlider cardName="Beauty and more"  products={Beautiproducts} />

      <ProductSlider cardName="Fashion and styles"  products={Fashionproducts} />
    </main>
  );
};

export default Home;
