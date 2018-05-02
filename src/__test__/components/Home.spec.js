import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { shallowWithStore, mountWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";

import Home from "../../containers/Home";

const testState = {
  artist: {},
  events: [],
  loading: false,
  error: ""
};

describe("Home", () => {
  it("should render successfully if string is not provided by store", () => {
    const mapStateToProps = (state) => ({
      state
    });
    const ConnectedComponent = connect(mapStateToProps)(Home);
    const component = shallowWithStore(<ConnectedComponent />, createMockStore(testState));
    expect(component.props().state).toBe(testState);
  });
});