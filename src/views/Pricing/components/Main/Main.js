import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Icon } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { CardPricingStandard, Section } from "components/organisms";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    backgroundColor: theme.palette.primary.dark,
    paddingBottom: theme.spacing(20),
    borderRadius: "0 0 100% 0",
  },
  textWhite: {
    color: "white",
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: "transparent",
  },
  toggleButton: {
    background: "transparent",
    border: "1px solid white",
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: "white !important",
  },
  toggleTitle: {
    textTransform: "capitalize",
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: "relative",
    marginTop: theme.spacing(-20),
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  cardPricing: {
    "& .countup-number__count-wrapper": {
      textAlign: "left",
      marginBottom: 0,
      fontWeight: "bold",
    },
  },
}));

const Main = (props) => {
  const { data, open, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [pricingOption] = React.useState("annual");

  return (
    <div className={className} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow className={classes.pagePaddingTop}>
          <>
            <SectionHeader
              title="Pricing"
              subtitle="Become a testing client "
              titleProps={{
                className: clsx(classes.textWhite, classes.fontWeightBold),
                variant: "h2",
              }}
              subtitleProps={{
                className: classes.textWhite,
              }}
              data-aos="fade-up"
            />
          </>
        </Section>
      </div>
      <div className={classes.pricingContainer}>
        <div>
          <Section className={classes.sectionNoPaddingTop}>
            <Grid container spacing={isMd ? 4 : 2}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                  <CardPricingStandard
                    variant="outlined"
                    withShadow={item.isHighlighted ? true : false}
                    title={item.title}
                    liftUp
                    subtitle={item.subtitle}
                    priceComponent={
                      <Typography variant="h3" color="textPrimary">
                        {pricingOption === "annual"
                          ? item.annual
                          : item.monthly}
                      </Typography>
                    }
                    features={item.features}
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={theme.palette.primary.main}
                      />
                    }
                    cta={
                      <Button
                        color="primary"
                        variant={item.isHighlighted ? "contained" : "outlined"}
                        fullWidth
                        onClick={open}
                        size="large"
                      >
                        Contact Us
                      </Button>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
