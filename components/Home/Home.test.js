import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { shallow } from "enzyme";

import Home from "./Home";

describe("PlaceCard", () => {
  NavigationTestUtils.resetInternalState();
  let wrapper;
  let instance;
  const createTestProps = props => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });

  const mockGeolocator = {
    getCurrentPosition: jest.fn()
  };

  beforeEach(() => {
    global.navigator.geolocation = mockGeolocator;
    props = createTestProps({});
    wrapper = shallow(<Home {...props} />);
    instance = wrapper.instance();
  });

  it(`matches snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should match init state", () => {
    const initState = { origin: "", destination: "", error: "", trip: {} };

    expect(wrapper.state()).toEqual(initState);
  });

  it("should make a trip when the button is pressed", () => {
    jest.spyOn(instance, "makeTrip");
    wrapper.find("TouchableOpacity").simulate("press");
    expect(instance.makeTrip).toHaveBeenCalled();
  });

  it("should find location when mounted", () => {
    let mockFn = jest.spyOn(instance, "getLocation");
    instance.componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it("should update state when origin is filled in", () => {
    expect(wrapper.state("origin")).toEqual("");
    wrapper.find("[data-test='origin-input']").simulate("ChangeText", "Denver");
    expect(wrapper.state("origin")).toEqual("Denver");
  });

  it("should update state when destination is filled in", () => {
    expect(wrapper.state("destination")).toEqual("");
    wrapper
      .find("[data-test='destination-input']")
      .simulate("ChangeText", "vail");
    expect(wrapper.state("destination")).toEqual("vail");
  });
});
