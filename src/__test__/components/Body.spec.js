import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Body from "../../components/Body";

describe("Body", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Body />, div);
  });

  it("should have 1 child", () => {
    const wrapper = shallow(<Body />);
    expect(wrapper.length).toEqual(1);
  });
});