import React from "react";
import { Header } from "./Header";

import { Cart } from "./Cart";
import { CheckOut } from "./CheckOut";

export const Home = () => {
  return (
    <>
      <Header />
      <Cart />
      <CheckOut />
    </>
  );
};
