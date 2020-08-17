import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentReactions from './CommentReactions'
import { sub } from 'date-fns'

configure({ adapter: new Adapter() })

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))

describe('CommentReactions', () => {
    const postId = "123"
    const comment = { 
        id: '111',
        user: {
            name: 'Mary',
            location: 'Florida'
        },
        date: sub(new Date(), { minutes: 20 }).toISOString(),
        content: 'This is a comment.',
        likes: 4,
        showCommentForm: false
    }
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<CommentReactions postId={postId} comment={comment}/>)
    })

    it('renders the correct number of likes', () => {
        expect(wrapper.find('.likes-count').text()).toEqual(`${comment.likes} Likes`)
    })

    it('increments comment like count on like button click', () => {
        wrapper.find('[data-testid="comment-like-button"]').simulate('click')

        expect(mockDispatch).toHaveBeenCalledWith({
            "payload": {
                "postId": "123", 
                "commentId": "111",
                }, 
            "type": "posts/incrementCommentLike"
        })
    })

    it('toggles edit comment form on edit button click', () => {
        wrapper.find('[data-testid="comment-edit-button"]').simulate('click')

        expect(mockDispatch).toHaveBeenCalledWith({
            "payload": {
                "postId": "123", 
                "commentId": "111",
                "showCommentForm": true
                }, 
            "type": "posts/toggleEditForm"
        })
    })

    it('deletes comment on delete button click', () => {
        wrapper.find('[data-testid="comment-delete-button"]').simulate('click')

        expect(mockDispatch).toHaveBeenCalledWith({
            "payload": {
                "postId": "123", 
                "commentId": "111"
                }, 
            "type": "posts/deleteComment"
        })
    })
})