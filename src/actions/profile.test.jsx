import { searchProfiles } from "./profile";
import { profile } from "../helper/sample-data-test";
import { SEARCH_PROFILE_PENDING } from "../actions/type";
// Import all seed data to test

describe("searchProfiles Tests", () => {
  it("SUCCESS: searchProfiles thunk test", () => {
    const term = "sprout";
    const thunk = searchProfiles(term);
    expect(typeof thunk).toBe("function");
    //mock the api
    const tweetSearch = jest.fn();
    tweetSearch.mockReturnValueOnce(Promise.resolve(profile));

    const Api = {
      tweetSearch,
    };

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, { Api }).then(() => {
      expect(Api.tweetSearch).toBeCalled();
      dispatch.mockImplementationOnce(() => tweetSearch());
      expect(dispatch).toBeCalledWith({ type: SEARCH_PROFILE_PENDING });
    });
  });

  it("FAILURE: searchProfiles thunk test", () => {
    const term = "sprout";
    const thunk = searchProfiles(term);
    expect(typeof thunk).toBe("function");
    //mock the api
    const tweetSearch = jest.fn();
    tweetSearch.mockReturnValueOnce(Promise.reject(new Error("network error")));

    const Api = {
      tweetSearch,
    };

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, { Api }).then(() => {
      expect(Api.tweetSearch).toBeCalled();
      dispatch.mockImplementationOnce(() => tweetSearch());
      expect(dispatch).toBeCalledWith({ type: SEARCH_PROFILE_PENDING });
    });
  });
});
