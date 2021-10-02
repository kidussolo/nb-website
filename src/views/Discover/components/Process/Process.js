import { colors, Grid, Typography } from "@material-ui/core";
import { IconAlternate, SectionHeader } from "components/molecules";
import { CardBase, DescriptionListIcon } from "components/organisms";
import PropTypes from "prop-types";
import React from "react";

const Process = (props) => {
  const { data } = props;

  const ProcessSectionHeader = ({ data }) => {
    return (
      <>
        {data.map((d) => {
          return (
            <>
              <SectionHeader
                ctaGroup={[
                  <Typography variant="h3" color="primary.dark">
                    {d.title}
                  </Typography>,
                ]}
                fadeUp
              />
              <Grid container spacing={4}>
                {d.steps.map((item, index) => {
                  return (
                    <Grid
                      key={index}
                      item
                      container
                      alignItems="center"
                      direction="column"
                      xs={12}
                      sm={12 / d.steps.length}
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
                          align="center"
                        />
                      </CardBase>
                    </Grid>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <SectionHeader
        title="Curious How it works ?"
        subtitle="Let's show you how"
        fadeUp
      />
      <ProcessSectionHeader data={data} />
    </>
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
