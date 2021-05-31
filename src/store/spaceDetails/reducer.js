import { SPACE_DETAILS_FETCHED } from "./actions";

const initialState = {
  stories: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SPACE_DETAILS_FETCHED:
      return { ...state, ...payload };

    default:
      return state;
  }
};
