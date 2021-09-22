import { colors, Grid, Typography } from "@material-ui/core";
import { IconAlternate, SectionHeader } from "components/molecules";
import { CardBase, DescriptionListIcon } from "components/organisms";
import PropTypes from "prop-types";
import React from "react";

const Process = (props) => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Curious How it works ?"
        subtitle="Let's show you how"
        ctaGroup={[
          <Typography variant="h2" color="primary">
            Autoposting
          </Typography>,
        ]}
        fadeUp
      />
      <Grid container spacing={4}>
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
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    color={colors.indigo}
                  />
                }
                title={item.title}
                subtitle={item.description}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Process;
