import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ForumIcon from "@material-ui/icons/Forum";
import { ContactForm, Section } from "components/organisms";
import React from "react";
import { Teams } from "views/About/components";
import Pricing from "views/Pricing";
import { Founders } from "views/Service/components";
import { Hero, Services, Footer } from "./components";

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
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
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
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

export const founders = [
  {
    title: "Co-Founder and CTO",
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x",
    },
    authorName: "Dagm Fekadu",
  },
  {
    title: "Co-Founder and CEO",

    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x",
    },
    authorName: "Ilya Dachekovisy",
  },
  // {
  //   title: "Co-Founder",

  //   authorPhoto: {
  //     src:
  //       "https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg",
  //     srcSet:
  //       "https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x",
  //   },
  //   authorName: "Person Name",
  // },
];

export const teams = [
  {
    title: "Software Engineer",
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x",
    },
    authorName: "Kidus Solomon",
  },
  {
    title: "",
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x",
    },
    authorName: "",
  },
  // {
  //   title: "Web Frontend Developer",
  //   authorPhoto: {
  //     src:
  //       "https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg",
  //     srcSet:
  //       "https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x",
  //   },
  //   authorName: "Valeria Kogan",
  // },
  // {
  //   title: "CEO / Co-Founder",
  //   authorPhoto: {
  //     src:
  //       "https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",
  //     srcSet:
  //       "https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x",
  //   },
  //   authorName: "Akachi Luccini",
  // },
  // {
  //   title: "CTO / Co-Founder",
  //   authorPhoto: {
  //     src:
  //       "https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",
  //     srcSet:
  //       "https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x",
  //   },
  //   authorName: "Jack Smith",
  // },
  // {
  //   title: "Consultant",
  //   authorPhoto: {
  //     src:
  //       "https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",
  //     srcSet:
  //       "https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x",
  //   },
  //   authorName: "Veronica Adams",
  // },
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
        {/* <Hero /> */}
        
      <Hero themeMode={themeMode} open={handleBottombarOpen}
            onClose={handleBottombarClose} />

      </Section>
      <Services />
      <Pricing />
      <Founders data={founders} />
      <Section>
        <Teams data={teams} />
      </Section>
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
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
