import { Box, Button, Drawer, Link, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { FAQ } from "../../components";
import { faq } from "../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 0),
    },
    background: theme.palette.primary.dark,
  },
  flexGrow: {
    flexGrow: 1,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    color: "white",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
  },

  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: "0 auto",
  },

  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },

  bottomNav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Footer = (props) => {
  const { open } = props;

  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  function Copyright() {
    return (
      <Typography variant="body2" style={{ color: "white" }} align="center">
        {"Copyright © "}
        {new Date().getFullYear()} Newsbrain. All rights reserved.
      </Typography>
    );
  }

  const socialButtonColors = [
    {
      icon: "fab fa-linkedin",
      text: "Linkedin",
      href: "https://www.linkedin.com/company/newsbrain",
      color: "buttonContainedLinkedin",
    },
    {
      icon: "fab fa-facebook",
      text: "Facebook",
      href: "https://www.facebook.com/groups/1871903176457236",
      color: "buttonContainedFacebook",
    },
    {
      icon: "fab fa-twitter",
      text: "Twitter",
      color: "buttonContainedTwitter",
    },
  ];

  const SocialMediaLink = () => {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth="sm"
        className={classes.socialIcon}
        padding={2}
      >
        {socialButtonColors.map((prop, key) => {
          const buttonRootClasses = {
            root: clsx(classes[prop.color], classes.buttonIconOnly),
          };
          return (
            <Box
              key={key}
              display="inline-block"
              marginRight="1rem"
              marginBottom="1rem"
            >
              <Link rel="noopener noreferrer" href={prop.href} target="_blank">
                <IconButton
                  variant="contained"
                  style={{ color: "white" }}
                  classes={buttonRootClasses}
                >
                  <Box fontSize="14px" component="i" className={prop.icon} />
                </IconButton>
              </Link>
            </Box>
          );
        })}
      </Box>
    );
  };

  const BottomNav = () => {
    return (
      <div className={classes.bottomNav}>
        <Button style={{ color: "white" }} onClick={() => open()}>
          Contact Us
        </Button>
        <Button style={{ color: "white" }} onClick={handleBottombarOpen}>
          FAQ
        </Button>
        <Button component="a" style={{ color: "white" }} href="/about">
          About Us
        </Button>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <BottomNav />
      <SocialMediaLink />
      <Copyright />
      <Drawer
        anchor="bottom"
        open={openBottombar}
        onClose={handleBottombarClose}
      >
        <div className={classes.contactForm}>
          <FAQ data={faq} />
        </div>
      </Drawer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
