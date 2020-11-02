import React from 'react';
import { mount } from 'enzyme';
import Home from '../../pages/index';

describe('PAGE: Home Page', () => {
  it('Should render with home page', function () {
    const wrap = mount(<Home />);
    expect(wrap.find('h1').text()).toBe('Home Page');
  });
});
