import { Route, Routes, useLocation } from "react-router-dom";
import { useMemo } from "react";
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

const App = () => {
  const location = useLocation();

  const hideHeaderFooter = useMemo(
    () => ["/signin", "/signup"].includes(location.pathname.toLowerCase()),
    [location.pathname]
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />

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
    </>
  );
};

export default App;
