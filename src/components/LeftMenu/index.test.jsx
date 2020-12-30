import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LeftMenu from "./index";

configure({ adapter: new Adapter() });

describe("LeftMenu", () => {
  it("should render without any data defined", () => {
    const component = shallow(<LeftMenu />);

    expect(component).toMatchSnapshot();
  });
  it("Renders with correct classes", () => {
    const component = shallow(<LeftMenu />);
    expect(component.find(".LeftMenu").length).toBe(1);
    expect(component.find(".LeftMenu_Nav-Link").length).toBe(9);
  });
});
