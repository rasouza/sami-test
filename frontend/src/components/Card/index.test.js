import React from "react";
import { shallow } from "enzyme";
import Card from './'

const hero = {
  name: "Batman",
  image: {
    url: "httpss://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
  },
};

it('render with default styles', () => {
  const actual = shallow(<Card hero={hero} />);
  expect(actual).toMatchSnapshot()
})