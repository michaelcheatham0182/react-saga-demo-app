import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../styles/index.css";

import Body from "../components/Body";
import Search from "../components/Search";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BandInfo from "../components/BandInfo";
import BandEvents from "../components/BandEvents";

import * as Actions from "../actions";

class Home extends Component {

  componentWillReceiveProps(nextProps) {
    const { setLoading, apiError, fetchArtist, fetchArtistEvents, params } = this.props;
    const { name } = params;
    const nextParams = nextProps.params;
    const newName = nextParams.name;

    if (name !== newName) {
      setLoading(true);
      apiError(false);
      fetchArtist(newName);
      fetchArtistEvents(newName);
    }
  }

  componentDidMount() {
    const { setLoading, apiError, fetchArtist, fetchArtistEvents } = this.props;
    const path = window.location.pathname.split("/");
    if (path[1] === "artists" && path[2]) {
      const artistName = decodeURIComponent(path[2]);
      setLoading(true);
      apiError(false);
      fetchArtist(artistName);
      fetchArtistEvents(artistName);
    }
  }

  renderContainer() {
    const { loading, error, artist, events } = this.props;
    return !error && Object.keys(artist).length > 0 && (
      <div className="container">
        <Loading loading={loading} />
        <BandInfo artist={artist} />
        <BandEvents loading={loading} events={events} />
      </div>
    );
  }

  render() {
    const { term, error } = this.props;
    return (
      <Body>
        <Search term={term} />
        <Error error={error} />
        {this.renderContainer()}
      </Body>
    );
  }
}

Home.propTypes = {
  artist: PropTypes.object,
  events: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

const mapStateToProps = ({ data, uiState }) => ({
  artist: data.artist,
  events: data.events,
  loading: uiState.loading,
  error: uiState.error
});

const mapDispatchToProps = (dispatch) => ({
  setLoading: (status) => { dispatch(Actions.setLoading(status)) },
  apiError: (status) => { dispatch(Actions.apiError(status)) },
  fetchArtist: (payload) => { dispatch(Actions.fetchArtist(payload)) },
  fetchArtistEvents: (payload) => { dispatch(Actions.fetchArtistEvents(payload)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
