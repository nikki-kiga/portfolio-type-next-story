import React from "react";
import { shallow } from 'enzyme';
import Button from "../Button/Button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Button id="test-button" onClick={() => {}} style='test' />).toJSON();
  expect(tree).toMatchSnapshot();
});
