import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RightMenu from "./index";

configure({ adapter: new Adapter() });

describe("RightMenu", () => {
  it("should render without any data defined", () => {
    const component = shallow(<RightMenu />);

    expect(component).toMatchSnapshot();
  });
  it("Renders with correct classes", () => {
    const component = shallow(<RightMenu />);
    expect(component.find(".RightMenu").length).toBe(1);
  });
});
