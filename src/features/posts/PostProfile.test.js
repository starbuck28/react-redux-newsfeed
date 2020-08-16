import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostProfile from './PostProfile'

configure({ adapter: new Adapter() })

describe('PostProfile', () => {
    const expectedUser = "Gaius Baltar"
    const expectedLocation = "Battlestar Galactica"
    const expectedDate = "12345678"
    let wrapper
    
    beforeEach(() => {
        wrapper = shallow(<PostProfile 
                            user={expectedUser} 
                            location={expectedLocation} 
                            date={expectedDate}/>)
    })

    it('renders the correct profile name', () => {
        expect (wrapper.find('.name').text()).toEqual(expectedUser)  
    })

    it('renders the correct location', () => {
        expect(wrapper.find('.location').text()).toEqual(expectedLocation)
    })

    it('passes the correct date to time passed', () => {
        expect(wrapper.find('.time').prop('timestamp')).toEqual(expectedDate)
    })
})