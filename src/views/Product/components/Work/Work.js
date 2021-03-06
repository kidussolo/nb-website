import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {} from '@material-ui/core';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));

const Work = props => {
  const { data, open, onClose, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Our Products"
        subtitle="Take a quick glance at some of our products. "
      />
      <Grid container justify="center">
        {data.map((item, index) => (
          <Grid
            data-aos="fade-up"
            key={index}
            item
            container
            xs={12}
            spacing={isMd ? 4 : 2}
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={6}>
              <SectionHeader
                titleVariant="h5"
                title={item.title}
                subtitle={item.description}
                ctaGroup={[ <Button color="primary" variant="contained" size={isMd? "large":"small"} onClick={() => open()}>
                Contact us
              </Button>,]}
                align="left"
                disableGutter
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={6}>
              <Image src={item.illustration} alt={item.title} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Work.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Work;
