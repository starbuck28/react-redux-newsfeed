import React from 'react';
import CommentForm from './CommentForm'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}))

describe('CommentForm', () => {
    it ('renders the correct input', () => {
        let wrapper = shallow(<CommentForm/>)
        expect(wrapper.find('#postComment')).toHaveLength(1)
    })
})