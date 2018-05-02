import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Event from "../../components/Event";

const event = {
  "id": "22043117",
  "artist_id": "334",
  "url": "https://www.bandsintown.com/e/22043117?app_id=sample-app-id&came_from=267",
  "on_sale_datetime": "",
  "datetime": "2018-04-24T19:00:00",
  "description": "",
  "venue": {
      "name": "OWL Osaka",
      "latitude": "34.6666667",
      "longitude": "135.5",
      "city": "Osaka",
      "region": "",
      "country": "Japan"
  },
  "offers": [{
      "type": "Tickets",
      "url": "https://www.bandsintown.com/t/22043117?app_id=sample-app-id&came_from=267",
      "status": "available"
  }],
  "lineup": [
      "Kelly"
  ]
};

describe("Event", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Event event={event} />, div);
  });

  it("should have 1 child", () => {
    const wrapper = shallow(<Event event={event} />);
    expect(wrapper.length).toEqual(1);
  });
});