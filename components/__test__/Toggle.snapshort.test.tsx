import React from 'react';
import Toggle from '../Toggle';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Toggle onChange={jest.fn()} style="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
