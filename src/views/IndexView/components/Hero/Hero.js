// import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import { SectionHeader, TypedText } from "components/molecules";
// import { HeroShaped } from "components/organisms";
// import PropTypes from "prop-types";
// import React from "react";

// const useStyles = makeStyles((theme) => ({
//   fontWeight900: {
//     fontWeight: 900,
//   },
//   leftSideContent: {
//     "& .section-header__cta-container": {
//       [theme.breakpoints.down("xs")]: {
//         flexDirection: "column",
//         "& .section-header__cta-item-wrapper": {
//           width: "100%",
//           "&:last-child": {
//             marginLeft: 0,
//             marginTop: theme.spacing(1),
//           },
//           "& .MuiButtonBase-root": {
//             width: "100%",
//           },
//         },
//       },
//     },
//   },
//   heroShaped: {
//     "& .hero-shaped__image": {
//       backgroundColor: theme.palette.alternate.main,
//     },
//     [theme.breakpoints.down("sm")]: {
//       "& .hero-shaped__image": {
//         position: "relative",
//       },
//       "& .hero-shaped__wrapper": {
//         flexDirection: "column",
//       },
//     },
//   },
//   imageAnimation: {
//     background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-light.png")`,
//     backgroundRepeat: "repeat",
//     backgroundAttachment: "scroll",
//     backgroundSize: "400px auto",
//     animation: `$slideshow 50s linear infinite`,
//     width: "600%",
//     height: "600%",
//     backgroundColor: theme.palette.alternate.dark,
//     top: "-25%",
//     left: "-100%",
//     position: "absolute",
//     [theme.breakpoints.up("sm")]: {
//       backgroundSize: "800px auto",
//     },
//   },
//   imageAnimationDark: {
//     background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-dark.png")`,
//   },
//   "@keyframes slideshow": {
//     "0%": {
//       transform: "rotate(-13deg) translateY(-25%)",
//     },
//     "100%": {
//       transform: "rotate(-13deg) translateY(-80%)",
//     },
//   },
// }));

// const Hero = ({ themeMode = "light", className, ...rest }) => {
//   const classes = useStyles();

//   const title = (
//     <Typography variant="h2" component="span" className={classes.fontWeight900}>
//       Free up time for Real Reporting
//       <br />
//       <TypedText
//         component="span"
//         variant="h3"
//         color="secondary"
//         className={classes.fontWeight900}
//         typedProps={{
//           strings: ["News Automation", "Text To Speech", "Autoposting"],
//           typeSpeed: 30,
//           loop: true,
//         }}
//       />
//     </Typography>
//   );

//   const subtitle = "The Brain Behind your news";

//   const leftSideContent = (
//     <SectionHeader
//       title={title}
//       subtitle={subtitle}
//       align="left"
//       titleProps={{
//         variant: "h3",
//         color: "textPrimary",
//       }}
//       data-aos="fade-right"
//       disableGutter
//       className={classes.leftSideContent}
//     />
//   );
//   return (
//     <div className={className} {...rest}>
//       <HeroShaped
//         className={classes.heroShaped}
//         leftSide={leftSideContent}
//         rightSide={
//           <div
//             className={clsx(
//               classes.imageAnimation,
//               themeMode === "dark" ? classes.imageAnimationDark : ""
//             )}
//           />
//         }
//       />
//     </div>
//   );
// };

// Hero.propTypes = {
//   /**
//    * External classes
//    */
//   className: PropTypes.string,
//   /**
//    * Theme mode
//    */
//   themeMode: PropTypes.string,
// };

// export default Hero;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import landingImage from "../../../../assets/images/landing.svg"

const useStyles = makeStyles(theme => ({
  price: {
    color: theme.palette.text.primary,
    fontSize: 32,
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
  },
  disclimer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1 / 2, 1),
    background: theme.palette.alternate.main,
    display: 'inline-block',
  },
  image: {
    maxWidth: 600,
  },
}));

const Hero = props => {
  const { className, open, onClose, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
    const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Free up time for Real Reporting
      <br />
      <TypedText
        component="span"
        variant="h3"
        color="primary"
        className={classes.fontWeight900}
        typedProps={{
          strings: ["News Automation", "Text To Speech", "Autoposting"],
          typeSpeed: 30,
          loop: true,
        }}
      />
    </Typography>
  );

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={title}
            subtitle= ""
            ctaGroup={[
              <Button variant="contained" color="primary" size="large" onClick={() => open()}  >
                Contact Us
              </Button>,
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
          {/* <div className={classes.disclimer} data-aos="fade-up">
            <Typography variant="subtitle1" color="textSecondary">
              $60 Apple Music gift card with purchase of select Beats products.*
            </Typography>
          </div> */}
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://pngimg.com/uploads/reporter/reporter_PNG22.png"
            // src={landingImage}
            // srcSet="https://assets.maccarianagency.com/the-front/photos/ecommerce/hero-cover@2x.png 2x"
            alt="Welcome"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
