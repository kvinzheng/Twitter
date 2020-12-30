import React from "react";
import { shallow, configure, mount } from "enzyme";
import { mapStateToProps, mapDispatchToProps } from "./index";
import { sampleProfile } from "../../helper/sample-data-test";
import { TweetForm } from "./index.jsx";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

const searchProfiles = jest.fn();

describe("TweetForm Component", () => {
  it("should render without any data defined", () => {
    const component = shallow(
      <TweetForm profileList={[]} status={""} searchProfiles={searchProfiles} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render with props passed in", () => {
    const component = shallow(
      <TweetForm
        profileList={sampleProfile.profile.data["sprout"]}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("Renders with correct classes", () => {
    const component = shallow(
      <TweetForm
        profileList={sampleProfile.profile.data["sprout"]}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    expect(component.find(".TweetForm").length).toBe(1);
    expect(component.find(".TweetForm-container").length).toBe(1);
  });

  it("mapStateToProps default data", () => {
    const state = {
      profile: { data: [], status: "" },
    };
    const expected = {
      profileList: [],
      status: "",
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps", () => {
    const state = sampleProfile;
    const expected = {
      profileList: sampleProfile.profile.data,
      status: "FULFILLED",
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("matDispatchtoProps", () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty("searchProfiles");
  });

  it("When type on the input in textarea", () => {
    const event = { target: { value: "sprout social", selectionStart: 13 } };

    const component = mount(
      <TweetForm
        profileList={sampleProfile.profile.data["sprout"]}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", event);
    //need to finish this test
  });
});
