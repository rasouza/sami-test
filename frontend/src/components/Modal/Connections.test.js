import React from "react";
import { shallow } from "enzyme";
import Connections from "./Connections"
import { List } from "semantic-ui-react"

const attributes = {
  "group-affiliation":
    "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
  relatives:
    "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family",
};

it('renders 6 attributes', () => {
  const actual = shallow(<Connections attributes={attributes} />)
  expect(actual.find(List.Item)).toHaveLength(2)
})

it('renders with default style', () => {
  const actual = shallow(<Connections attributes={attributes} />);
  expect(actual).toMatchSnapshot()
})