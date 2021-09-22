import { colors, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { IconAlternate, SectionHeader } from "components/molecules";
import { CardBase, DescriptionListIcon } from "components/organisms";
import PropTypes from "prop-types";
import React from "react";

const Advantages = (props) => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const data = [
    {
      title: "Text-to-Speech",
      description:
        "Turn text into natural-sounding speech in any major European language and variant using our powerful machine learning technology.",
      icon: "fas fa-comments",
    },
    {
      title: "Media Monitoring",
      description:
        "Go home early. With auto-posting from NewsBrain, you can easily schedule news uploads to website and social media pages to keep your viewers updated around the clock.",
      icon: "fas fa-photo-video",
    },
    {
      title: "Data Monitoring",
      description:
        "Stop scrolling through social media feeds to find your next breaking news. Data monitoring automates tedious keyword hunting and home page visits, so you never miss an update again.",
      icon: "fas fa-server",
    },
    {
      title: "Media-on-Demand Automation",
      description:
        "You ask, we deliver. NewsBrain can provide custom solutions tailored to your newsroom’s specific needs. We draw on years of experience to help you improve your news coverage and unburden reports.",
      icon: "fas fa-tachometer-alt",
    },
  ];

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            Services we{" "}
            <Typography color="primary" variant="inherit" component="span">
              Provide
            </Typography>
          </span>
        }
        fadeUp
      />
      <Grid container spacing={isLg ? 10 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined">
              <DescriptionListIcon
                title={item.title}
                subtitle={item.description}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.blue}
                  />
                }
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;
