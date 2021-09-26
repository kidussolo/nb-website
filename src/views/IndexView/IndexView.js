import { AppBar, Drawer, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContactForm, Section } from "components/organisms";
import React from "react";
import { Teams } from "views/About/components";
import Pricing from "views/Pricing";
import { Founders } from "views/Service/components";
import founderCTO from "../../assets/images/dagm.jpg";
import founderCEO from "../../assets/images/ilya.jpeg";
import teamMember from "../../assets/images/kidus.jpg";
import noUser from "../../assets/images/no-profile-picture.svg";
import { Hero, Services } from "./components";

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(12),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(12),
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
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: "0 auto",
  },
}));

export const founders = [
  {
    title: "Co-Founder and CTO",
    authorPhoto: {
      src:
        founderCTO,
    },
    authorName: "Dagm Fekadu",
  },
  {
    title: "Co-Founder and CEO",

    authorPhoto: {
      src: founderCEO,
    },
    authorName: "Ilya Dashkovsky",
  },
];

export const teams = [
  {
    title: "Software Engineer",
    authorPhoto: {
      src: teamMember,
    },
    authorName: "Kidus Solomon",
  },
  {
    title: "Can claim this spot",
    authorPhoto: {
      src: { noUser },
    },
    authorName: "You",
  },
];

const IndexView = ({ themeMode }) => {
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
      <Section className={classes.pagePaddingTop}>
        <Hero themeMode={themeMode} open={handleBottombarOpen} />
      </Section>
      <Services />
      <Pricing open={handleBottombarOpen} />
      <Founders data={founders} />
      <Section>
        <Teams data={teams} />
      </Section>
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

export default IndexView;
