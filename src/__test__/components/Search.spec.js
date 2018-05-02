import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Search from "../../components/Search";

describe("Search", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search />, div);
  });

  it("should have 1 child", () => {
    const search = shallow(<Search />);
    expect(search.length).toEqual(1);
  });
});