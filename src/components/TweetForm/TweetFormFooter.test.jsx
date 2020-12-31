import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TweetFormFooter  from "./TweetFormFooter.jsx";
import { TEXT_AREA_COUNT } from "../../const/form";


configure({ adapter: new Adapter() });

describe("TweetFormFooter Component", () => {
  it("should render without any data defined", () => {
    const component = shallow(<TweetFormFooter error={""} status={TEXT_AREA_COUNT} />);
    expect(component).toMatchSnapshot();
  });

  it("should render with props passed in", () => {
    const component = shallow(
      <TweetFormFooter
        error={
          "please editing an @ followed by 2 alphanumeric characters (a-z, 0-9)"
        }
        status={TEXT_AREA_COUNT}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("Renders with correct classes", () => {
    const component = shallow(
      <TweetFormFooter
        error={
          "please editing an @ followed by 2 alphanumeric characters (a-z, 0-9)"
        }
        status={TEXT_AREA_COUNT}
      />
    );
    expect(component.find(".TweetFormFooter").length).toBe(1);
    expect(component.find(".TweetFormFooter-warning").length).toBe(1);
    expect(component.find(".TweetFormFooter-item").length).toBe(3);
  });
});
