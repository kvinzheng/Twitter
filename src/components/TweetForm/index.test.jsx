import React from "react";
import { shallow, configure, mount } from "enzyme";
import { mapStateToProps, mapDispatchToProps } from "./index";
import {
  sampleProfile,
  textAreaSampleData,
} from "../../helper/sample-data-test";
import { TweetForm } from "./index.jsx";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TweetFormProfileList from "./TweetFormProfileList";
configure({ adapter: new Adapter() });

const searchProfiles = jest.fn();

describe("TweetForm Component", () => {
  it("should render without any data defined", () => {
    const component = shallow(
      <TweetForm profiles={{}} status={""} searchProfiles={searchProfiles} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render with props passed in", () => {
    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("Renders with correct classes", () => {
    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
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
      profiles: [],
      status: "",
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps", () => {
    const state = sampleProfile;
    const expected = {
      profiles: sampleProfile.profile.data,
      status: "FULFILLED",
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("matDispatchtoProps", () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty("searchProfiles");
  });

  it("When type on the input in textarea with normal character", () => {
    const event = { target: { value: "sprout social", selectionStart: 13 } };

    const component = mount(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", event);
    //need to finish this test
  });

  it("When type on the input in textarea when searching successfully", () => {
    const event = { target: { value: "@sprout", selectionStart: 13 } };

    const component = mount(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", event);
    //need to finish this test
  });

  it("When type on the input in textarea when searching unsuccessfully", () => {
    const event = {
      target: {
        value: textAreaSampleData.inValidCharacter,
        selectionStart: 13,
      },
    };

    const component = mount(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", event);
    //need to finish this test
  });

  it("When type on the input in textarea when searching with out of bound warning", () => {
    const event = {
      target: { value: textAreaSampleData.outBound, selectionStart: 13 },
    };

    const component = mount(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", event);
    //need to finish this test
  });

  it("When type on the input in textarea with validateCharacter and count", () => {
    const onChangeEvent = {
      target: { value: textAreaSampleData.validCharacter, selectionStart: 4 },
    };
    const onKeyDownEvent = { key: " " };

    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");

    // const setCountRemain = jest.fn();
    // const mockUseState = jest.spyOn(React, "useState");
    // mockUseState.mockImplementation((size) => [size, setCountRemain]);
    textArea.simulate("change", onChangeEvent);
    textArea.simulate("keydown", onKeyDownEvent);

    const profileItem = component
      .find(".TweetForm-container-list")
      .dive()
      .find(".TweetFormProfileList-Item")
      .at(0);
    profileItem.simulate("click");
  });
});
