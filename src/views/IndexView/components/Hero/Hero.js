import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import PropTypes from 'prop-types';
import React from 'react';

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
