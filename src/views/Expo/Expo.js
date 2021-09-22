import { Section } from "components/organisms";
import React from "react";
import { Process } from "./components";
import { process } from "./data";

const Discover = () => {
  return (
    <div>
      <Section>
        <Process data={process} />
      </Section>
    </div>
  );
};

export default Discover;
