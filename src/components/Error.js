import React from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => {  
  return error && (
    <div className="error">
      We are having a problem with your request. Please try again later
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.bool
}

export default Error;