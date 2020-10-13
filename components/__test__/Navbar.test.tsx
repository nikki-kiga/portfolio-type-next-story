import React from "react";
import { mount } from 'enzyme';
import NavBar from "../NavBar";

describe("COMPONENT: NavBar", () => {
  const links = [{pathName: 'test-1' , path: '/test-1' },
    {pathName: 'test-2' , path: '/test-2' },
    {pathName: 'test-3' , path: '/test-3' }]
  it("Should have 3 lis", function () {
    const wrap = mount(<NavBar links={links} />);
    expect(wrap.find("ul").children().length).toBe(3);
  });
});
