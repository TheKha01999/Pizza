import React from "react";
import "./style.css";
import "./responsive.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";

import Footer from "./Pages/Footer/Footer";
import { AppProvider } from "./Components/AppContext/AppContext";
import Home from "./Pages/Home/Home";
import PageOrder from "./Pages/PageOrder/PageOrder";
import PageSea from "./Pages/PageSea/PageSea";
import PageTradi from "./Pages/PageTradi/PageTradi";
import PageMixed from "./Pages/PageMixed/PageMixed";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import PageCart from "./Pages/PageCart/PageCart";
import PageSingleProduct from "./Pages/PageSingleProduct/PageSingleProduct";

import "aos/dist/aos.css";
import Email from "./Pages/Email/Email";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <ProductDetails />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/product" element={<PageSingleProduct />} />
        <Route path="/checkout" element={<Email />} />
        <Route path="/order" element={<PageOrder />}>
          <Route path="/order/tradi" element={<PageTradi />}></Route>
          <Route path="/order/sea" element={<PageSea />}></Route>
          <Route path="/order/mixed" element={<PageMixed />}></Route>
        </Route>
      </Routes>
      <Footer />
    </AppProvider>
  );
};

export default App;
