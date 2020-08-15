import React from 'react';
import PostsList from './PostsList'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector } from 'react-redux'
import SinglePost from './SinglePost';

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}))

describe('PostsList', () => {
    it ('displays a list of posts', () => {
        const initialState = [
            { 
                id: '1',
                user: {
                    name: 'Brutus Buckeye',
                    location: 'Columbus'
                },
                content: 'O-H-I-O!'
            },
            {
                id: '2',
                user: {
                    name: 'Cookie Monster',
                    location: 'Sesame Street'
                },
                content: 'Me want cookie.'
            }
        ]

        useSelector.mockImplementation(() => { return initialState})
        let wrapper = shallow(<PostsList/>)

        expect(wrapper.find('section').children()).toHaveLength(2)
        expect(wrapper.find(SinglePost).at(0).prop('post')).toBe(initialState[0])
        expect(wrapper.find(SinglePost).at(1).prop('post')).toBe(initialState[1])
    })

    it ('does not render posts if there are none', () => {
        useSelector.mockImplementation(() => { return []})
        let wrapper = shallow(<PostsList/>)

        expect(wrapper.find('section').children()).toHaveLength(0)
    })
})

