import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import React from "react";
import { Hero, Partners, Reviews, Work } from "./components";
import { partners, reviews, work } from "./data";

const useStyles = makeStyles((theme) => ({
  sectionAlternate: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Startup = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Partners data={partners} />
      <Divider />
      <Section>
        <Work data={work} />
      </Section>
      <Divider />
      <Section>
        <Reviews data={reviews} />
      </Section>
      <Divider />
    </div>
  );
};

export default Startup;
