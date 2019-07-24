import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { mockTrip } from "../../utilities/mockTrips.js";
import { shallow } from "enzyme";

import PlaceCardWithLeg from "./PlaceCardWithLeg";

describe("PlaceCardWithLeg", () => {
  NavigationTestUtils.resetInternalState();
  let wrapper;
  const createTestProps = props => ({
    navigation: {
      navigate: jest.fn()
    },
    hoursToNextPlace: jest.fn(),
    ...props
  });

  beforeEach(() => {
    const place = mockTrip.places[0];
    const color = "red";
    const index = 0;
    const weather = mockTrip.places[0].icon;
    const trip = { legs: mockTrip.legs };
    props = createTestProps({ place, color, weather, trip, index });
    wrapper = shallow(<PlaceCardWithLeg {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
