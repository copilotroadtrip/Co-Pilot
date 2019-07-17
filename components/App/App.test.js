import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('App', () => {
    
    const navigation = { navigate: jest.fn() };
    let wrapper = shallow(<App {...navigation}/>)
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })


})


