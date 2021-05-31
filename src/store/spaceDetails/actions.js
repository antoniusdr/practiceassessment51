import axios from "axios";
import { apiUrl } from "../../config/constants";

export const SPACE_DETAILS_FETCHED = "SPACE_DETAILS_FETCHED";

const spaceDetailsFetched = space => ({
  type: SPACE_DETAILS_FETCHED,
  payload: space
});

export const fetchSpaceById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log(response);
    dispatch(spaceDetailsFetched(response.data.space));
  };
};
