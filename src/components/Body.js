import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Body = ({ children }) => {
  return (
    <div className="wrapper">
      <nav>
        <h1 className="logo"><Link to="/">FindMyArtist</Link></h1>
      </nav>
      {children}
    </div>
  );

};

Body.propTypes = {
  children: PropTypes.node
}

export default Body;