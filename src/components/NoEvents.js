import React from "react";
import PropTypes from "prop-types";

const NoEvents = ({ loading }) => {  
  return !loading && (
    <h2>No upcoming events for this artist</h2>
  );
};

NoEvents.propTypes = {
  loading: PropTypes.bool
}

export default NoEvents;