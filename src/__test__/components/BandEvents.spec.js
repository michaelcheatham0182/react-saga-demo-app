import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import BandEvents from "../../components/BandEvents";

const events = [{
  "id": "22042780",
  "artist_id": "334",
  "url": "https://www.bandsintown.com/e/22042780?app_id=sample-app-id&came_from=267",
  "on_sale_datetime": "",
  "datetime": "2018-04-03T19:00:00",
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
      "url": "https://www.bandsintown.com/t/22042780?app_id=sample-app-id&came_from=267",
      "status": "available"
  }],
  "lineup": [
      "Kelly"
  ]
}, {
  "id": "22041511",
  "artist_id": "334",
  "url": "https://www.bandsintown.com/e/22041511?app_id=sample-app-id&came_from=267",
  "on_sale_datetime": "",
  "datetime": "2018-04-06T21:00:00",
  "description": "",
  "venue": {
      "name": "Elevator",
      "latitude": "31.005",
      "longitude": "121.4086111",
      "city": "Shanghai",
      "region": "",
      "country": "China"
  },
  "offers": [{
      "type": "Tickets",
      "url": "https://www.bandsintown.com/t/22041511?app_id=sample-app-id&came_from=267",
      "status": "available"
  }],
  "lineup": [
      "Kelly"
  ]
}, {
  "id": "22118683",
  "artist_id": "334",
  "url": "https://www.bandsintown.com/e/22118683?app_id=sample-app-id&came_from=267",
  "on_sale_datetime": "",
  "datetime": "2018-04-07T12:00:00",
  "description": "",
  "venue": {
      "name": "The Rex",
      "latitude": "43.65062",
      "longitude": "-79.38848",
      "city": "Toronto",
      "region": "ON",
      "country": "Canada"
  },
  "offers": [],
  "lineup": [
      "Kelly"
  ]
}, {
  "id": "22042881",
  "artist_id": "334",
  "url": "https://www.bandsintown.com/e/22042881?app_id=sample-app-id&came_from=267",
  "on_sale_datetime": "",
  "datetime": "2018-04-10T19:00:00",
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
      "url": "https://www.bandsintown.com/t/22042881?app_id=sample-app-id&came_from=267",
      "status": "available"
  }],
  "lineup": [
      "Kelly"
  ]
}, {
  "id": "22042992",
  "artist_id": "334",
  "url": "https://www.bandsintown.com/e/22042992?app_id=sample-app-id&came_from=267",
  "on_sale_datetime": "",
  "datetime": "2018-04-17T19:00:00",
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
      "url": "https://www.bandsintown.com/t/22042992?app_id=sample-app-id&came_from=267",
      "status": "available"
  }],
  "lineup": [
      "Kelly"
  ]
}, {
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
}];

describe("BandEvents", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BandEvents loading={false} events={events} />, div);
  });

  it("should have 1 child", () => {
    const wrapper = shallow(<BandEvents loading={false} events={events} />);
    expect(wrapper.length).toEqual(1);
  });
});