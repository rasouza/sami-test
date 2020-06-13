import React from "react";
import { shallow } from "enzyme";
import PowerStats from "./PowerStats"
import { List } from "semantic-ui-react"

const attributes = {
  intelligence: "100",
  strength: "26",
  speed: "27",
  durability: "50",
  power: "47",
  combat: "100",
};

it('renders 6 attributes', () => {
  const actual = shallow(<PowerStats attributes={attributes} />)
  expect(actual.find(List.Item)).toHaveLength(6)
})

it('renders with default style', () => {
  const actual = shallow(<PowerStats attributes={attributes} />);
  expect(actual).toMatchSnapshot()
})