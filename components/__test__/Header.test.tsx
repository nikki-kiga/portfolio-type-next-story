import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

describe('COMPONENT: Header', () => {
  it('Should have 3 spans in title', function () {
    const wrap = mount(<Header />);
    expect(wrap.find('.titleMain').children().length).toBe(3);
  });
});
