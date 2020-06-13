import React from "react";
import { shallow } from "enzyme";
import Input from './'

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

const loading = false

it("render with default styles", () => {
  const actual = shallow(<Input loading={loading} />);
  expect(actual).toMatchSnapshot();
});