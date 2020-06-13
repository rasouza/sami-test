import React from "react";
import { shallow } from "enzyme";
import Work from "./Work"
import { List } from "semantic-ui-react"

const attributes = {
  occupation: "Businessman",
  base:
    "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower",
};

it('renders 6 attributes', () => {
  const actual = shallow(<Work attributes={attributes} />)
  expect(actual.find(List.Item)).toHaveLength(2)
})

it('renders with default style', () => {
  const actual = shallow(<Work attributes={attributes} />);
  expect(actual).toMatchSnapshot()
})