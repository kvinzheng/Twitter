import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { mapStateToProps, mapDispatchToProps } from "./index";
import { TweetForm } from "./index.jsx";
import TweetFormProfileList from "./TweetFormProfileList";
import TweetFormFooter from "./TweetFormFooter";

import {
  sampleProfile,
  textAreaSampleData,
} from "../../helper/sample-data-test";

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

  it("mapStateToProps with data", () => {
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

  it("When type on the input in textarea with normal characters and it doesn't make api call", () => {
    const event = { target: { value: "sprout social", selectionStart: 13 } };

    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", event);
    const profileItem = component
      .find(TweetFormProfileList)
      .dive()
      .find(".TweetFormProfileList-Item");
    expect(profileItem.length).toBe(0);
  });

  it("When type on the input in textarea with validateCharacter and count", () => {
    const onChangeEvent = {
      target: { value: "@sprout", selectionStart: 4 },
    };

    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", onChangeEvent);

    const profileItem = component
      .find(TweetFormProfileList)
      .dive()
      .find(".TweetFormProfileList-Item")
      .at(0);
    profileItem.simulate("click");
  });

  it("When type on the input in textarea with validateCharacter but as a new data", () => {
    const onChangeEvent = {
      target: { value: "@tesla", selectionStart: 4 },
    };

    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", onChangeEvent);

    const profileItem = component
      .find(TweetFormProfileList)
      .dive()
      .find(".TweetFormProfileList-Item")
      .at(0);
    expect(profileItem.length).toBe(0);
  });

  it("When type on the input in textarea outbound data", () => {
    const onChangeEvent = {
      target: { value: textAreaSampleData.outBound, selectionStart: 4 },
    };

    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", onChangeEvent);

    const outBoundWarning = component
      .find(TweetFormFooter)
      .dive()
      .find(".TweetFormFooter-warning");
    expect(outBoundWarning.length).toBe(1);
  });

  it("When type on the input in textarea invalid data", () => {
    const onChangeEvent = {
      target: { value: textAreaSampleData.inValidCharacter, selectionStart: 2 },
    };

    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    const textArea = component.find(".TweetForm-textArea");
    textArea.simulate("change", onChangeEvent);

    const outBoundWarning = component
      .find(TweetFormFooter)
      .dive()
      .find(".TweetFormFooter-warning");
    expect(outBoundWarning.length).toBe(1);
  });

  it("When type on key down", () => {
    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile.data}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );

    const textArea = component.find(".TweetForm-textArea");
    const onKeyDownEvent = { key: " " };
    textArea.simulate("keydown", onKeyDownEvent);
  });
});
