import React from "react";
import { Main } from "./components";
import { pricings } from "./data";

const Pricing = ({ open }) => (
  <div>
    <Main data={pricings} open={open} />
  </div>
);

export default Pricing;
