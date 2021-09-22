import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import React from "react";
import { Process } from "./components";
import { process } from "./data";

const useStyles = makeStyles((theme) => ({
  sectionDescription: {
    background: colors.blue[900],
  },
  sectionAlternateForm: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.text.primary} 0%)`,
  },
}));

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
