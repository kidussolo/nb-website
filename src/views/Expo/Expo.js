import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section, SectionAlternate } from "components/organisms";
import React from "react";
import { About, Contact, Description, PromoNumbers } from "./components";
import { promoNumbers, teasers } from "./data";

const useStyles = makeStyles((theme) => ({
  sectionDescription: {
    background: colors.blue[900],
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.text.primary} 0%)`,
  },
}));

const Expo = () => {
  const classes = useStyles();

  return (
    <div>
      <SectionAlternate className={classes.sectionDescription}>
        <Description />
      </SectionAlternate>
      <Section>
        <PromoNumbers data={promoNumbers} />
      </Section>
      <About data={teasers} />
      <div className={classes.sectionAlternateForm}>
        <Section narrow>
          <Contact />
        </Section>
      </div>
    </div>
  );
};

export default Expo;
