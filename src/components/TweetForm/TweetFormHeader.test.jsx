import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TEXT_AREA_COUNT } from "../../const/form";
import TweetFormHeader from "./TweetFormHeader.jsx";


configure({ adapter: new Adapter() });

describe("TweetFormHeader Component", () => {
  it("should render without any data defined", () => {
    const component = shallow(<TweetFormHeader />);
    expect(component).toMatchSnapshot();
  });

  it("Renders with correct classes", () => {
    const component = shallow(
      <TweetFormHeader
        error={
          "please editing an @ followed by 2 alphanumeric characters (a-z, 0-9)"
        }
        status={TEXT_AREA_COUNT}
      />
    );
    expect(component.find(".TweetFormHeader").length).toBe(1);
    expect(component.find(".TweetFormHeader-detail").length).toBe(1);
    expect(component.find(".TweetFormHeader-twitter-logo").length).toBe(1);
    expect(component.find(".TweetFormHeader-name").length).toBe(1);
    expect(component.find(".TweetFormHeader-account").length).toBe(1);
  });
});
