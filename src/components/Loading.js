import React from "react";
import PropTypes from "prop-types";

const Loading = ({ loading }) => {  
  return loading && (
    <div className="loading">
      <span><i className="fa fa-circle-o-notch"></i></span>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool
}

export default Loading;