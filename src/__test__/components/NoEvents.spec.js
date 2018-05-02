import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import NoEvents from "../../components/NoEvents";

describe("NoEvents", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoEvents/>, div);
  });

  it("should render the h2", () => {
    const noEvents = shallow(<NoEvents loading={false} />);
    const h2 = <h2>No upcoming events for this artist</h2>;

    expect(noEvents.contains(h2)).toEqual(true);
  });
});




