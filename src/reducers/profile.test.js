import profile from "./profile";
import { profileState } from "./state";
import {
  SEARCH_PROFILE_PENDING,
  SEARCH_PROFILE_FULFILLED,
  SEARCH_PROFILE_REJECTED,
} from "../actions/type";

import { profileApiData } from "../helper/sample-data-test";

describe("profile data", () => {
  it("returns an the default state if passed in state that is undefined", () => {
    const nextState = profile(undefined, {});
    expect(nextState).toEqual({ ...profileState });
  });

  it("returns the exact state given an unkown type (i.e., does not modify the state)", () => {
    const prevState = { ...profileState };
    const nextState = profile(prevState, { type: "UNKNOWN" });
    expect(nextState).toBe(prevState);
  });

  it("FULFILLED: return a new state with the specified profile data on it- search with the word sprout", () => {
    const incomingApiData = profileApiData.users;
    const prevState = { ...profileState };
    const nextState = profile(prevState, {
      type: SEARCH_PROFILE_FULFILLED,
      payload: { data: incomingApiData.users, profile: "sprout" },
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({
      data: { sprout: incomingApiData.users },
      status: "FULFILLED",
    });
  });

  it("REJECTED: return a new state with the specified profile data on it- search with the word sprout", () => {
    const incomingApiData = profileApiData.users;
    const prevState = { ...profileState };
    const nextState = profile(prevState, {
      type: SEARCH_PROFILE_REJECTED,
      payload: { data: incomingApiData.users, profile: "sprout" },
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ data: {}, status: "REJECTED" });
  });

  it("PENDING: return a new state with the specified profile data on it- search with the word sprout", () => {
    const prevState = { ...profileState };
    const nextState = profile(prevState, {
      type: SEARCH_PROFILE_PENDING,
      payload: undefined,
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ data: {}, status: "PENDING" });
  });
});
