import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';

describe('COMPONENT: Footer', () => {
  it('Should have four socials', function () {
    const wrap = mount(<Footer />);
    expect(wrap.find('.socials').children().length).toBe(4);
  });
});
