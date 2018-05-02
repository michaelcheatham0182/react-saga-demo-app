import React from "react";
import PropTypes from "prop-types";

const BandInfo = ({ artist }) => {
  const { name, url, thumb_url, facebook_page_url, upcoming_event_count } = artist;

  return (
    <section className="left">
      <div>
        <img src={thumb_url} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div>
          <div><i className="fa fa-facebook-square"></i> <a href={facebook_page_url}>Facebook</a></div>
          <div><i className="fa fa-xing"></i> <a href={url}>BandsInTown</a></div>
          <div>{upcoming_event_count || `No` } upcoming events</div>
        </div>
      </div>
    </section>
  );

};

BandInfo.propTypes = {
  artist: PropTypes.object
};

export default BandInfo;