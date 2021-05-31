import { FETCH_SPACES_SUCCESS } from "./actions";
import { SPACE_UPDATED } from "../user/actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACES_SUCCESS:
      return [...state, ...action.payload];
    case SPACE_UPDATED: {
      return state.map(space => {
        if (space.id !== action.payload.id) {
          return space;
        }

        return { ...action.payload, stories: [...space.stories] };
      });
    }
    default:
      return state;
  }
};
