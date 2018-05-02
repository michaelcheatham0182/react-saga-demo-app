import { SET_LOADING, THROW_API_ERROR } from "../constants/actions";

const initialState = {
  loading: false,
  error: null
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.status
      };
    }

    case THROW_API_ERROR: {
      return {
        ...state,
        error: action.status
      };
    }

    default: {
      return state;
    }
  }
};

export default stateReducer;
