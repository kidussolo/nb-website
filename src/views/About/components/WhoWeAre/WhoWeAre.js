import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import { SectionHeader } from "components/molecules";

const WhoWeAre = (props) => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Our Story"
            subtitle="We hail from a variety of backgrounds and have put our collective problem-solving abilities to use to help you analyze public records, automate social media monitoring, automatically curate news into popular CMSs, and never miss out on official reports.
            "
            disableGutter
            align="left"
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Where are we?"
            subtitle="Based in Israel and Germany, our solutions can be custom fit to your operations and work fluently in every major European language. Ready to get started? We look forward to becoming your new newsroom partner.
            "
            disableGutter
            align="left"
            subtitleProps={{
              variant: "body1",
              color: "textPrimary",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
