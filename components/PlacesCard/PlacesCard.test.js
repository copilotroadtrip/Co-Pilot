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
      state: { params: {} },
      dispatch: jest.fn(),
      goBack: jest.fn(),
      dismiss: jest.fn(),
      navigate: jest.fn(),
      openDrawer: jest.fn(),
      closeDrawer: jest.fn(),
      toggleDrawer: jest.fn(),
      getParam: jest.fn(() => {
        return mockTrip;
      }),
      setParams: jest.fn(),
      addListener: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
      pop: jest.fn(),
      popToTop: jest.fn(),
      isFocused: jest.fn()
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
