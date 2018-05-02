import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import NoEvents from "./NoEvents";

const BandEvents = ({ loading, events }) => {
  const hasEvents = events.length;
  const renderBand = (event, index) => <Event event={event} key={index} />;
  const upcomingEvents = (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        { hasEvents && events.map(renderBand) }
      </div>
    </div>
  );
  
  return (
    <section className="right">
      { hasEvents ? upcomingEvents : <NoEvents loading={loading} /> }
    </section>
  );
};

BandEvents.propTypes = {
  loading: PropTypes.bool,
  events: PropTypes.array
};

export default BandEvents;