import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { sampleProfile } from "../../helper/sample-data-test";
import TweetFormProfileList from "./TweetFormProfileList.jsx";

configure({ adapter: new Adapter() });
const handleListItemClick = jest.fn();

describe("TweetFormProfileList Component", () => {
  it("Should render without any data defined", () => {
    const component = shallow(
      <TweetFormProfileList
        profileList={[]}
        status={""}
        searchTerm={""}
        onListItemClick={handleListItemClick}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("Renders with correct classes", () => {
    const component = shallow(
      <TweetFormProfileList
        profileList={sampleProfile.profile.data["sprout"]}
        status={sampleProfile.profile.status}
        searchTerm={"sprout"}
        onListItemClick={handleListItemClick}
      />
    );
    expect(component.find(".TweetFormProfileList").length).toBe(1);
    expect(component.find(".TweetFormProfileList-profiles").length).toBe(1);
    expect(component.find(".TweetFormProfileList-network").length).toBe(1);
  });

  it("When click on a profile item", () => {
    const component = mount(
      <TweetFormProfileList
        profileList={sampleProfile.profile.data["sprout"]}
        status={sampleProfile.profile.status}
        searchTerm={"sprout"}
        onListItemClick={handleListItemClick}
      />
    );

    component.find(".TweetFormProfileList-Item").at(0).simulate("click");
    expect(handleListItemClick).toHaveBeenCalled();
  });
});
