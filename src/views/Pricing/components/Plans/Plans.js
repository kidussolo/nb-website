import PropTypes from "prop-types";
import React from "react";

const Plans = (props) => {
  const { data, className, ...rest } = props;

  return <div className={className} {...rest}></div>;
};

Plans.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Plans;
