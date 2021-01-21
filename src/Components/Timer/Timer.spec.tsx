import React from "react";
import { shallow } from "enzyme";
import Timer from "./Timer";

describe("mounted Timer", () => {
  let container: any;
  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(3);
  });

  it("should render a h1", () => {
    expect(container.find("h1").length).toEqual(1);
  });

});