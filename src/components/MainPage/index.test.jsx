import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MainPage from "./index";

configure({ adapter: new Adapter() });

describe("MainPage", () => {
  it("should render without any data defined", () => {
    const component = shallow(<MainPage />);

    expect(component).toMatchSnapshot();
  });
  it("Renders with correct classes", () => {
    const component = shallow(<MainPage />);
    expect(component.find(".MainPage").length).toBe(1);
  });
});
