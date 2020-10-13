import React from "react";
import { mount } from "enzyme";
import About from "../../pages/about";

describe("PAGE: About Page", () => {
  it("Should render about page", function () {
    const wrap = mount(<About />);
    expect(wrap.find("#initial").text()).toBe("This is the about page!");
  });
});
