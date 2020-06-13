import React from "react";
import { shallow } from "enzyme";
import Biography from "./Biography"
import { List } from "semantic-ui-react"

const attributes = {
  "full-name": "Bruce Wayne",
  "alter-egos": "No alter egos found.",
  aliases: ["Insider", "Matches Malone"],
  "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
  "first-appearance": "Detective Comics #27",
  publisher: "DC Comics",
  alignment: "good",
};

it('renders 6 attributes', () => {
  const actual = shallow(<Biography attributes={attributes} />)
  expect(actual.find(List.Item)).toHaveLength(7)
})

it('renders with default style', () => {
  const actual = shallow(<Biography attributes={attributes} />);
  expect(actual).toMatchSnapshot()
})