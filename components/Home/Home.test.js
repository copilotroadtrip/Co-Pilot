import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { mockTrip } from "../../utilities/mockTrips.js";
import { shallow } from "enzyme";

import Home from "./Home";

describe("PlaceCard", () => {
  NavigationTestUtils.resetInternalState();
  let wrapper;
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
  });

  it(`matches snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
