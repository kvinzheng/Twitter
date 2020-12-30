import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mapStateToProps, mapDispatchToProps } from "./index";
import { sampleProfile } from "../../helper/sample-data-test";
import { TweetForm } from "./index.jsx";
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
        profiles={sampleProfile.profile}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("Renders with correct classes", () => {
    const component = shallow(
      <TweetForm
        profiles={sampleProfile.profile}
        status={sampleProfile.profile.status}
        searchProfiles={searchProfiles}
      />
    );
    expect(component.find(".TweetForm").length).toBe(1);
    expect(component.find(".TweetForm-container").length).toBe(1);
  });

  it("mapStateToProps default data", () => {
    const state = {
      profile: { status: "" }
     
    };
    const expected = {
      profiles: {status: ""},
      status: "",
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps", () => {
    const state = sampleProfile;
    const expected = {
      profiles: sampleProfile.profile,
      status: "FULFILLED",
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  xit("matDispatchtoProps", () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty("searchProfiles");
  });

  xit("When submit on the form", () => {
    const component = mount(
      <TweetForm
        loadAllData={loadAllData}
        setSearchTerm={setSearchTerm}
        searchTerm={"cat"}
      />
    );
    component.find(".search-form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(loadAllData).toHaveBeenCalled();
  });

  xit("When type on the input", () => {
    const component = mount(
      <TweetForm
        loadAllData={loadAllData}
        setSearchTerm={setSearchTerm}
        searchTerm={"cat"}
      />
    );
    component.find("#input-bar").simulate("change", {
      preventDefault: () => {},
      target: {
        value: "cat",
      },
    });
    expect(loadAllData).toHaveBeenCalled();
  });
});
