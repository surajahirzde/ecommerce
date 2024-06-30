import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import Footer from "../components/Footer";
const Rootlayout = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Rootlayout;
