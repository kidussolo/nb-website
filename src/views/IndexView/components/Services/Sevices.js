import React from "react";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography, colors } from "@material-ui/core";
import { IconAlternate, SectionHeader } from "components/molecules";
import { DescriptionListIcon, Section } from "components/organisms";

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: "fas fa-money-check-alt",
    title: "Affordable pricing",
  },
  {
    icon: "fas fa-sliders-h",

    title: "Full customization",
  },
  {
    icon: "fas fa-clock",
    title: "24-hour support",
  },
  {
    icon: "fas fa-network-wired",
    title: "Operations abilities with all CMS systems and apps",
  },
  {
    icon: "fas fa-language",
    title: "Native performance in all major European languages",
  },
];

const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h4" component="span" className={classes.fontWeight900}>
      Content Automation for &nbsp;
      <Typography component="span" variant="inherit" color="primary">
        Journalists
      </Typography>
    </Typography>
  );

  const subtitle =
    "NewsBrain makes your job easier, acting as an in-house consultant and staff who handles everything from text-to-speech transcription to automated postings on your social media sites. NewsBrain takes the tedious work your office relies on, freeing up staff to go after the big stories that make impacts and impress readers.";

  const title1 = (
    <Typography variant="h4" component="span" className={classes.fontWeight900}>
      Affordable Solutions That Grow &nbsp;
      <Typography component="span" variant="inherit" color="primary">
        Your Capabilities
      </Typography>
    </Typography>
  );

  const benefitsHeader = (
    <Typography variant="h4" component="span" className={classes.fontWeight900}>
      With NewsBrain, you get:
    </Typography>
  );

  const subtitle1 =
    "NewsBrain eases staff workloads and positions you for growth. Designed by former journalists and with offices in Germany and Israel, we are helping to define the leading edge of the media revolution to help your newsroom make an impact in your town, your stature, and your country.";

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: "h4",
            color: "textPrimary",
          }}
        />

        <SectionHeader
          title={title1}
          subtitle={subtitle1}
          align="center"
          titleProps={{
            variant: "h4",
            color: "textPrimary",
          }}
          data-aos="fade-up"
        />
      </Section>

      <Section>
        <SectionHeader
          title={benefitsHeader}
          align="center"
          titleProps={{
            variant: "h4",
            color: "textPrimary",
          }}
          data-aos="fade-up"
        />
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={"fade-up"}>
              <DescriptionListIcon
                title={item.title}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="large"
                    color={colors.indigo}
                  />
                }
                align="center"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
