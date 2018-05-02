import React from "react";
import PropTypes from "prop-types";
import months from "../utils/date-month";

const Event = ({ event }) => {
  const { datetime, venue } = event;
  const { name, city, country } = venue;

  const eventDate = new Date(datetime);
  const date = eventDate.getDate();
  const month = months[eventDate.getMonth()];
  
  return (
    <section className="event">
      <div className="when">
        <span>{month}</span>
        <span>{date}</span>
      </div>
      <div className="name">{name}</div>
      <div className="where">
        {`${city}, ${country}`}
      </div>
    </section>
  );
};

Event.propTypes = {
  event: PropTypes.object
};

export default Event;