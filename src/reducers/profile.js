import {
  SEARCH_PROFILE_PENDING,
  SEARCH_PROFILE_FULFILLED,
  SEARCH_PROFILE_REJECTED,
} from "../actions/type";

import { profileState } from "./state";

const profile = (state = profileState, action) => {
  switch (action.type) {
    case SEARCH_PROFILE_PENDING: {
      return {
        ...state,
        status: "PENDING",
      };
    }
    case SEARCH_PROFILE_FULFILLED: {
      const { data, profile } = action.payload;
      const prevData = state.data;
      return {
        ...state,
        data: { ...prevData, [profile]: data },
        status: "FULFILLED",
      };
    }
    case SEARCH_PROFILE_REJECTED: {
      return {
        ...state,
        status: "REJECTED",
      };
    }

    default:
      return state;
  }
};
export default profile;
