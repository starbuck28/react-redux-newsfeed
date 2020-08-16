import React from 'react';
import PostForm from './PostForm'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}))

describe('PostForm', () => {
    it ('renders the correct form elements', () => {
        let wrapper = shallow(<PostForm/>)

        expect(wrapper.find('#postContent')).toHaveLength(1)
        expect(wrapper.find('.post-button')).toHaveLength(1)
    })
})