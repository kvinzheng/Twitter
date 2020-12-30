import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { tweetSearch } from "./api";
import { profileApiData } from "../helper/sample-data-test";

describe("api test", () => {
  it("returns profile list when tweetSearch is called", (done) => {
    const term = "sprout";

    const API_URL = `/twitter/user/search?username=${term}`;

    const mockResult = profileApiData;
    const mock = new MockAdapter(axios);

    mock.onGet(API_URL).reply(200, mockResult);
    tweetSearch(term).then((response) => {
      expect(response).toEqual(mockResult);
      done();
    });
  });
});
