import React from "react";
import App from "../../App";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("App", () => {
  it("should past test", () => {
    expect(true).toEqual(true);
  });
  it("should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
