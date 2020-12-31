import { renderHook, act } from "@testing-library/react-hooks";

import useDebounce from "./useDebounce";
import { FETCH_DELAY_TIME } from "../../const/form";


jest.useFakeTimers();

describe("useDebounce hook tests", () => {
  it("When update a search term, useEffect should trigger", async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useDebounce("sprout", FETCH_DELAY_TIME)
    );

    setImmediate(() => {
      act(() => {
        jest.runAllTimers();
      });
    });

    await waitForValueToChange(async () => {
      jest.runAllTimers();
      return result.current;
    });

    expect(result.current).toEqual("sprout");
  });
});
