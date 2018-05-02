import * as Actions from "../constants/actions";

const initialState = {
  artist: {},
  events: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ARTIST_SUCCESS: {
      return {
        ...state,
        artist: action.data
      };
    }

    case Actions.FETCH_ARTIST_EVENTS_SUCCESS: {
      return {
        ...state,
        events: action.data
      };
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
