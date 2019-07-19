import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { mockTrip } from "../../utilities/mockTrips.js";
import { shallow } from "enzyme";

import PlacesCard from "./PlacesCard";

describe("PlaceCard", () => {
  NavigationTestUtils.resetInternalState();
  let wrapper;
  const createTestProps = props => ({
    navigation: {
      getParam: jest.fn(() => {
        return mockTrip;
      })
    },
    ...props
  });

  beforeEach(() => {
    const trips = { places: mockTrip.places, legs: mockTrip.legs };
    props = createTestProps({ trips });
    wrapper = shallow(<PlacesCard {...props} />);
  });

  it(`matches snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
