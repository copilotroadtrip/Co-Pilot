import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { mockTrip } from "../../utilities/mockTrips.js";
import { shallow } from "enzyme";

import PlaceCardWithoutLeg from "./PlaceCardWithoutLeg";

describe("PlaceCardWithoutLeg", () => {
  NavigationTestUtils.resetInternalState();
  let wrapper;
  const createTestProps = props => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });

  beforeEach(() => {
    const place = mockTrip.places[0];
    const color = "red";
    const weather = mockTrip.places[0].icon;
    props = createTestProps({ place, color, weather });
    wrapper = shallow(<PlaceCardWithoutLeg {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
