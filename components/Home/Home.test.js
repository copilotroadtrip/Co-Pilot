import React from "react";
import Home from "./Home";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("Home", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
