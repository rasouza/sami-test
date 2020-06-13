import React from "react";
import { shallow } from "enzyme";
import Appearance from "./Appearance"
import { List } from "semantic-ui-react"

const attributes = {
  gender: "Male",
  race: "Human",
  height: ["6'2", "188 cm"],
  weight: ["210 lb", "95 kg"],
  "eye-color": "blue",
  "hair-color": "black",
};

it('renders 6 attributes', () => {
  const actual = shallow(<Appearance attributes={attributes} />)
  expect(actual.find(List.Item)).toHaveLength(6)
})

it('renders with default style', () => {
  const actual = shallow(<Appearance attributes={attributes} />);
  expect(actual).toMatchSnapshot()
})