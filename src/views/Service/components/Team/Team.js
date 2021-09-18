import { Avatar, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SectionHeader } from "components/molecules";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  teamAvatar: {
    maxWidth: 200,
    maxHeight: 200,
    width: "100%",
    height: "100%",
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    marginTop: theme.spacing(1 / 2),
  },
}));

const Team = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader title="Founders" fadeUp />
      <Grid container justify="center" spacing={isMd ? 0 : 3}>
        {data.map((item, index) => (
          <Grid
            data-aos="fade-up"
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            md={4}
          >
            <Typography variant="overline" color="primary">
              {item.authorName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
            <Avatar
              className={classes.teamAvatar}
              {...item.authorPhoto}
              alt={item.authorName}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Team;
