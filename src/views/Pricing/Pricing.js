import React from "react";
import { Main } from "./components";
import { pricings } from "./data";

const Pricing = () => (
  <div>
    <Main data={pricings} />
  </div>
);

export default Pricing;
