import {
  AppBar,
  Drawer, IconButton,
  Toolbar, useMediaQuery
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ForumIcon from "@material-ui/icons/Forum";
import clsx from "clsx";
import { ContactForm } from "components/organisms";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Footer, Sidebar, Topbar } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
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

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const pages = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About Us",
      href: "/about"
    },
    {
      title: "Services",
      href: "/services"
    },
    {
      title: "Product",
      href: "/product"
    },
    {
      title: "Discover",
      href: "/discover"
    },

  ]


  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
      </main>
      <Footer open={handleBottombarOpen}
            onClose={handleBottombarClose}/>
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

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
