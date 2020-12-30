import rootReducer from "./index";
import { emptySampleData } from "../helper/sample-data-test";
import { SEARCH_PROFILE_PENDING } from "../actions/type";

describe("Index Reducer Tests", () => {
  const base = {
    profile: { status: "PENDING", data: {} },
  };

  it("it expect to handle incoming profile data", () => {
    expect(
      rootReducer(
        {},
        {
          type: SEARCH_PROFILE_PENDING,
        }
      )
    ).toEqual({ ...base, ...emptySampleData });
  });
});
