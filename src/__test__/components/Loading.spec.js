import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Loading from "../../components/Loading";

describe("Loading", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loading loading={true} />, div);
  });

  it("should have 1 child", () => {
    const loading = shallow(<Loading loading={true} />);
    expect(loading.length).toEqual(1);
  });
});