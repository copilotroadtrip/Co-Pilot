import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { mockTrip } from "../../utilities/mockTrips.js";
import { shallow } from "enzyme";

import Place from "./Place";


describe("Place", () => {
  NavigationTestUtils.resetInternalState();
  let wrapper;
  const createTestProps = props => ({
    navigation: {
      getParam: jest.fn(() => {
        return mockTrip.places[0];
      })
    },
    ...props
  });

  beforeEach(() => {
   
    props = createTestProps({});
    wrapper = shallow(<Place {...props} />);
  });

  it(`matches snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
