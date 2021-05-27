import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Cart from "../components/shop/cart";
import Checkout from "../components/shop/checkout";
import Login from "../components/shop/login";
import Product from "../components/shop/product";
import ProductDetails from "../components/shop/productDetails";

const Shop = () => {
  let { path } = useRouteMatch();
  console.log(path);

  return (
    <Switch>
      <Route exact path={path}>
        <div>This is shop page</div>
      </Route>
      <Route path={`${path}/product`}>
        <Product />
      </Route>
      <Route path={path + "/productDetails"}>
        <ProductDetails products={[]}/>
      </Route>
      <Route path={path + "/checkout"}>
        <Checkout />
      </Route>
      <Route path={path + "/cart"}>
        <Cart />
      </Route>
      <Route path={path + "/login"}>
        <Login />
      </Route>
    </Switch>

  );
};

export default Shop;
