import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditCommentForm from './EditCommentForm';
import { sub } from 'date-fns'

configure({ adapter: new Adapter() })

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))

describe('EditCommentForm', () => {
    it ('fires edit comment action on submit', () => {
        const postId = "123"
        const comment = { 
            id: '111',
            user: {
                name: 'Mary',
                location: 'Florida'
            },
            date: sub(new Date(), { minutes: 20 }).toISOString(),
            content: 'This is a comment.',
            likes: 0,
            showCommentForm: false
        }
        let wrapper = shallow(<EditCommentForm postId={postId} comment={comment}/>)

        wrapper.find('#editComment').simulate('change', {target: { value: 'hello' }})
        wrapper.find('form').simulate('submit', {preventDefault: () => {}})

        expect(mockDispatch).toHaveBeenCalledWith({"payload": {"postId": "123", "commentId": "111", "content": "hello" }, "type": "posts/editComment"})
        expect(mockDispatch).toHaveBeenCalledWith({"payload": {"postId": "123", "commentId": "111", "showCommentForm": true }, "type": "posts/toggleEditForm"})
    })
})