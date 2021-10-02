import {
  Button,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { Image } from "components/atoms";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark,
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0,
    },
    whiteSpace: "nowrap"
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 50,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 70,
      height: 32,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  slogan: {
    color: theme.palette.primary.dark,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    marginRight: theme.spacing(5),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.outerContainer}>
        <div className={classes.brandContainer}>
          <div className={classes.logoContainer}>
            <a href="/" title="newsbrain">
              <Image
                className={classes.logoImage}
                src={logo}
                alt="Newsbrain"
                lazy={false}
              />
            </a>
          </div>
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h4">News Brain </Typography>
          </a>
        </div>
        <Link href="/" underline="none">
          <Typography className={classes.slogan} variant="h6">
            The Brain Behind your news{" "}
          </Typography>
        </Link>
      </div>

      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button component="a" href="/">
              Home
            </Button>
          </ListItem>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button component="a" href="/product">
              Products
            </Button>
          </ListItem>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button component="a" href="/about">
              About Us
            </Button>
          </ListItem>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button component="a" href="/discover">
              Discover
            </Button>
          </ListItem>
          
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button component="a" href="https://editor.newsbrain.io/login">
              Signin
            </Button>
            {/* <Link rel="noopener noreferrer" href="https://editor.newsbrain.io/login" target="_blank">
              Sign in
          </Link> */}
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        {/* <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} /> */}
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
