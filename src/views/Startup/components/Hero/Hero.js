import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SectionHeader } from "components/molecules";
import { HeroBackground } from "components/organisms";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(3, 2, 30, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 6, 30, 6),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5, 8, 30, 8),
    },
  },
  noPadding: {
    padding: 0,
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <HeroBackground
        backgroundImg="https://assets.maccarianagency.com/the-front/illustrations/cities.jpg"
        backgroundColor="white"
        backgroundPosition="bottom center"
        contentSectionClassName={classes.noPadding}
        className={classes.hero}
        disbaleCoverOpacity
      >
        <SectionHeader
          title="Automation Solutions for
          Media Professional"
          subtitle="NewsBrain's solutions will free up your time for interviewing, investigating and writing. We will automatically post breaking news, send editors alerts about important financial and sports events and analyse data for you. "
          fadeUp
          titleVariant="h3"
          titleProps={{
            style: { color: colors.grey[900] },
          }}
          subtitleProps={{
            style: { color: colors.grey[700] },
          }}
        />
      </HeroBackground>
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
