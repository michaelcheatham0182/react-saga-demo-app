import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Error from "../../components/NoEvents";

describe("Error", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Error/>, div);
  });

  it("should have 1 child", () => {
    const error = shallow(<Error error={true} />);
    expect(error.length).toEqual(1);
  });
});