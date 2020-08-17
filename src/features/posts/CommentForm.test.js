import React from 'react';
import CommentForm from './CommentForm'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { sub } from 'date-fns'

configure({ adapter: new Adapter() })

const mockDispatch = jest.fn()
const mockNanoid = jest.fn()
const mockTimestamp = jest.fn()

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))

jest.mock('../../transformers', () => ({
    getCurrentTimestamp: () => mockTimestamp,
    getRandomId: () => mockNanoid
}))

mockTimestamp.mockImplementation(() => { return "123456789"})
mockNanoid.mockImplementation(() => { return "123" })

describe('CommentForm', () => {
    const post = {
        id: '1',
        date: sub(new Date(), { minutes: 2 }).toISOString(),
        user: {
            name: 'Cookie Monster',
            location: 'Sesame Street'
        },
        content: 'Me want cookie.',
        likes: 5,
        showComments: true,
        comments: {
            likes: 0,
            individualComments: []
        }
    }

    it('renders the correct input', () => {
        let wrapper = shallow(<CommentForm post={post}/>)
        expect(wrapper.find('#postComment')).toHaveLength(1)
    })

    it('adds comment on form submit', () => {
        let wrapper = shallow(<CommentForm post={post}/>)

        mockTimestamp.mockReturnValue("123456789")

        const comment = { 
            id: mockNanoid,
            user: {
                name: 'Maya',
                location: 'Pandora'
            },
            date: mockTimestamp,
            content: 'This is a comment.',
            likes: 0,
            showCommentForm: false
        }

        wrapper.find('#postComment').simulate('change', {
                    target: { value: comment.content }
                  })
        wrapper.find('[data-testid="comment-form"]').simulate('submit', {preventDefault: () => {}})

        expect(mockDispatch).toHaveBeenCalledWith({
            "payload": {
                "postId": "1", 
                "comment": comment
                }, 
            "type": "posts/addComment"
        })
    })
})