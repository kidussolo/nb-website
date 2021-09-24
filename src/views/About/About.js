import { AppBar, Drawer, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContactForm, Section } from "components/organisms";
import React from "react";
import { Contact, Hero, Story, WhoWeAre } from "./components";
import { mapData } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: "0 5px 20px 0 rgba(90, 202, 157, 0.05)",
    "& .section-alternate__content": {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  appBarBottom: {
    top: "auto",
    bottom: 0,
    background: "transparent",
    boxShadow: "none",
  },
  toolbarBottom: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: "absolute",
    right: theme.spacing(3),
    left: "auto",
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: "white",
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: "0 auto",
  },
}));

const About = () => {
  const classes = useStyles();
  const [openBottombar, setOpenBottombar] = React.useState(false);


  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <Story />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <WhoWeAre />
      </Section>
      <Contact data={mapData} />
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default About;
