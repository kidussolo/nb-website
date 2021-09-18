import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}));

const Story = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <SectionHeader
            title="Who are we?"
            subtitle="Hi, we’re NewsBrain. We are a diverse team of former journalists and software engineers who have seen up close how newsrooms worldwide are being impacted by changing technologies, news consumption habits, and changing economics. While each of these challenges is individually upending the ways journalists report on stories, we also see a silver lining. Thanks to the ability of new automation technologies to unburden reporters and editors from what had formerly been tedious tasks, journalists are now free to focus on what really matters — great reporting."
            align="left"
            disableGutter
            subtitleProps={{
              color: "textPrimary",
              variant: "body1",
            }}
          />
        </Grid>
        <Grid
          item
          container
          justify={isMd ? "flex-end" : "flex-start"}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/working-on-sofa.svg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
