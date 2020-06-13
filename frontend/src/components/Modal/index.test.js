import React from "react";
import { shallow } from "enzyme";
import Modal from './'
import PowerStats from "./PowerStats";
import Biography from "./Biography";
import Appearance from "./Appearance";
import Work from "./Work";
import Connections from "./Connections";

const hero = {
  image: {
    url: "httpss://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
  },
};

it('renders with default style', () => {
  const actual = shallow(<Modal hero={hero} />)
  expect(actual).toMatchSnapshot()
})

it('contains all 5 sections for Hero profile', () => {
  const actual = shallow(<Modal hero={hero} />);
  expect(actual.contains(<PowerStats/>)).toBeTruthy()
  expect(actual.contains(<Appearance/>)).toBeTruthy()
  expect(actual.contains(<Biography/>)).toBeTruthy()
  expect(actual.contains(<Work/>)).toBeTruthy()
  expect(actual.contains(<Connections/>)).toBeTruthy()
})