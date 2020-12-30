import React from "react";
import thunk from "redux-thunk";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";

import CenterMenu from "./index";

configure({ adapter: new Adapter() });

describe("CenterMenue", () => {
  it("should render without any data defined", () => {
    const component = shallow(<CenterMenu />);

    expect(component).toMatchSnapshot();
  });
  it("Renders with correct classes", () => {
    const component = shallow(<CenterMenu />);
    expect(component.find(".CenterMenu").length).toBe(1);
    expect(component.find(".CenterMenu-title").length).toBe(1);
  });
});
