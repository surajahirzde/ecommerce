import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Errorpage from "./helper/Errorpage";
import Rootlayout from "./helper/Rootlayout";
import Home from "./components/Home";
import Login from "./components/Login";
import { GlobalData } from "./helper/GlobalData";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );
  const [userdata, setuserdata] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  useEffect(() => {
    if (userdata?.Email) {
      const userCart =
        JSON.parse(localStorage.getItem(`cartItem${userdata.Email}`)) || [];
      setCartItem(userCart);
    } else {
      const guestCart = JSON.parse(localStorage.getItem("cartItem")) || [];
      setCartItem(guestCart);
    }
  }, [userdata,cartItem]);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />} errorElement={<Errorpage />}>
        <Route index element={<Home />} />
        <Route path="/search/:id" element={<SearchPage />} />
        <Route path="/login" element={<Login btnName="Login" />} />
        <Route path="/register" element={<Login btnName="Register" />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <GlobalData.Provider
      value={{ setCartItem, cartItem, userdata, setuserdata }}
    >
      <RouterProvider router={routes} />
    </GlobalData.Provider>
  );
};

export default App;
