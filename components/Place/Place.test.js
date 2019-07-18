import React from "react";
import Place from "./Place";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("Place", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Place />);
    expect(wrapper).toMatchSnapshot();
  });
});
