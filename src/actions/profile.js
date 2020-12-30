import {
  SEARCH_PROFILE_PENDING,
  SEARCH_PROFILE_FULFILLED,
  SEARCH_PROFILE_REJECTED,
} from "./type";

export const searchProfiles = (profile) => {
  return async (dispatch, getState, { Api }) => {
    dispatch({ type: SEARCH_PROFILE_PENDING });
    try {
      const { users } = await Api.tweetSearch(profile);
      dispatch({
        type: SEARCH_PROFILE_FULFILLED,
        payload: { data: users, profile },
      });
    } catch (e) {
      dispatch({ type: SEARCH_PROFILE_REJECTED });
    }
  };
};
