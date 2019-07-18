import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import renderer from "react-test-renderer";
import mockTrip from "../../utilities/mockTrips.js";
import { shallow } from "enzyme";

import PlacesCard from "./PlacesCard";

describe("PlaceCard", () => {
  NavigationTestUtils.resetInternalState();
  let expected;
  const spyNav = jest.fn();
  const state = {
    trip: mockTrip
  };
  const props = {
    navigation: {
      navigate: spyNav,
      getParam: jest.fn(mockTrip)
    }
  };
  // const params = {
  //   token: "random"
  // };
  beforeEach(() => {
    expected = shallow(<PlacesCard {...props} state={state} />);
    // expected.setState({ params: params });
  });

  it(`matches snapshot`, () => {
    expect(expected).toMatchSnapshot();
  });
});
