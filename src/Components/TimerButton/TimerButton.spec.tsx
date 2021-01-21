import React from "react";
import { shallow } from "enzyme";
import TimerButton from "./TimerButton";

describe("TimerButton", () => {
  let container: any;
  beforeEach(() => {container = shallow(<TimerButton start={jest.fn()} stop={jest.fn()} reset={jest.fn()} />);});

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(4);
  });

  it("should render a p", () => {
    expect(container.find("p").length).toBeGreaterThanOrEqual(3);
  });

});