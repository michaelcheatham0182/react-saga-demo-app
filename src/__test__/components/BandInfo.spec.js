import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import BandInfo from "../../components/BandInfo";

const artist = {
  "id": "334",
  "name": "Kelly",
    "url": "https://www.bandsintown.com/a/334?came_from=267&app_id=sample-app-id",
    "image_url": "https://s3.amazonaws.com/bit-photos/large/5736650.jpeg",
  "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/5736650.jpeg",
  "facebook_page_url": "http://www.facebook.com/pages/KELLY/506744836027634",
  "mbid": "6ad22f7c-4d20-435b-af76-a92a7e9bd12e",
  "tracker_count": 7150,
  "upcoming_event_count": 6
}

describe("BandInfo", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BandInfo artist={artist} />, div);
  });

  it("should have 1 child", () => {
    const wrapper = shallow(<BandInfo artist={artist} />);
    expect(wrapper.length).toEqual(1);
  });
});