import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Image } from "components/atoms";
import PropTypes from "prop-types";
import React from "react";
import gridSeparator from "utils";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.alternate.main,
    width: "100%",
  },
  noBg: {
    background: "transparent",
  },
  copy: {
    textAlign: "center",
    maxWidth: 700,
    margin: "0 auto",
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 2),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  logoImg: {
    maxWidth: 100,
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const Partners = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <div className={classes.copy}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="textSecondary"
              align="center"
              className={classes.fontWeight700}
            >
              This folks get it:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              {data.map((partner, index) => (
                <Grid item xs={gridSeparator(index, data.length, 2, 6)} sm={2} key={index}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className={classes.logoImg}
                    lazy={false}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
