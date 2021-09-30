import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import PropTypes from 'prop-types';
import React from 'react';
import landing from "../../../../assets/images/landing.png";

const useStyles = makeStyles(theme => ({
  
  image: {
    maxWidth: 600,
    height: 100
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
        justify={isMd ? "space-between": "center"}
        spacing={isMd ? 6 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={title}
            subtitle= ""
            ctaGroup={[
              <Button variant="contained" color="primary" size={isMd? "large":"small"} onClick={() => open()}  >
                Contact Us
              </Button>,
            ]}
            align= {isMd ?"left": "center"}
            data-aos="fade-up"
            titleVariant="h3"
          />
        </Grid>
        {isMd ? <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src={landing}
            alt="Welcome"
            className={classes.image}
          />
        </Grid> : ""}
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
