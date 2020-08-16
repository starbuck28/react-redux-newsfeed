import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentReactions from './CommentReactions'
import { sub } from 'date-fns'

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}))

describe('CommentReactions', () => {
    const postId = "123"
    const comment = { 
        id: '123',
        user: {
            name: 'Mary',
            location: 'Florida'
        },
        date: sub(new Date(), { minutes: 20 }).toISOString(),
        content: 'This is a comment.',
        likes: 4
    }
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<CommentReactions postId={postId} comment={comment}/>)
    })
    
    it('renders the correct buttons', () => {
        expect(wrapper.find('button')).toHaveLength(3)
    })

    it('renders the correct number of likes', () => {
        expect(wrapper.find('.likes-count').text()).toEqual(`${comment.likes} Likes`)
    })
})