import { AppBar, Divider, Drawer, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContactForm, Section } from "components/organisms";
import React from "react";
import { Hero, Partners, Reviews, Work } from "./components";
import { partners, reviews, work } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
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
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(15),
    },
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

const Product = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);
  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div>
      <Hero />
      <Partners data={partners} />
      <Divider />
      <Section>
        <Work
          data={work}
          open={handleBottombarOpen}
          onClose={handleBottombarClose}
        />
      </Section>
      <Divider />
      {/* Hidding review section for now */}
      {false ? (
        <Section>
          <Reviews data={reviews} />
        </Section>
      ) : (
        ""
      )}
      <Divider />
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

export default Product;
