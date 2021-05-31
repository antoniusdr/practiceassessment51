import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";

export const fetchSpacesSuccess = spaces => ({
  type: FETCH_SPACES_SUCCESS,
  payload: spaces,
});

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    const spacesCount = getState().spaces.length;
    const response = await axios.get(
      `${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${spacesCount}`
    );

    // console.log(response.data);
    dispatch(fetchSpacesSuccess(response.data.spaces.rows));
  };
};

// 1. its two function because of the thunk
// 2. we have an API call in this function
// 3. Instead of asserting on a return, we have to do so on a function call (dispatch).
