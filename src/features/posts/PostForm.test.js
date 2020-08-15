import React from 'react';
import PostForm from './PostForm'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector } from 'react-redux'

configure({ adapter: new Adapter() })

describe('PostForm', () => {
    it ('renders the correct form elements', () => {
        let wrapper = shallow(<PostForm/>)
        expect(wrapper.find('#postContent')).toHaveLength(1)
        expect(wrapper.find('button')).toHaveLength(1)
    })
})