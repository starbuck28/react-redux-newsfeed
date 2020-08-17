import React from 'react';
import PostForm from './PostForm'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyledInputDiv } from './PostForm'

configure({ adapter: new Adapter() })

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))

describe('PostForm', () => {
    it ('renders the correct form elements', () => {
        const wrapper = shallow(<PostForm/>)

        expect(wrapper.find('#postContent')).toHaveLength(1)
        expect(wrapper.find('[data-testid="post-submit-button"]')).toHaveLength(1)
    })

    // it('adds a post on form submit', () => {
    //     const wrapper = shallow(<PostForm/>)

    //     wrapper.find('#postContent').simulate('change', {
    //         target: { value: 'hello' }
    //       })
    //     wrapper.find('[data-testid="post-submit-button"]').simulate('click', {preventDefault: () => {}})

    //     expect(mockDispatch).toHaveBeenCalledWith({
    //         "payload": {
    //              "comments": {
    //                "individualComments": [],
    //                "total": 0,
    //              },
    //              "content": "hello",
    //              "date": "2020-08-17T04:33:02.898Z",
    //              "id": "Nh1uoBIGnXahrwHRZZzdo",
    //              "likes": 0,
    //              "showComments": false,
    //              "user": {
    //                "location": "Pandora",
    //                "name": "Maya",
    //              }
    //             },"type": "posts/toggleCommentSection"})
    // })
})