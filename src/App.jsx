import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Notifications from "./components/shared/Notifications";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProtectedRoutes from "./lib/utils/ProtectedRoutes";
import PublicRoutes from "./lib/utils/PublicRoutes";
import Categories from "./pages/Categories";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/product/productSlice";
import { fetchCategories } from "./features/category/categorySlice";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Fav from "./pages/Fav";

const App = () => {
  const location = useLocation();

  const hideHeaderFooter = useMemo(
    () => ["/signin", "/signup"].includes(location.pathname.toLowerCase()),
    [location.pathname]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<Categories />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
      {!hideHeaderFooter && <Footer />}
      <Notifications />
    </div>
  );
};

export default App;
