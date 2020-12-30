import { renderHook, act } from "@testing-library/react-hooks";

// import { shallow, configure, mount } from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import useDebounce from "./useDebounce";
import { FETCH_DELAY_TIME } from "../../const/form";

// configure({ adapter: new Adapter() });

// const setDebouncedValue = jest.fn();
// using fake timers
jest.useFakeTimers();

describe("useDebounce hook tests", () => {
  it("When update a search term, useEffect should trigger", async () => {
    const { result, waitForNextUpdate, waitForValueToChange } = renderHook(() =>
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