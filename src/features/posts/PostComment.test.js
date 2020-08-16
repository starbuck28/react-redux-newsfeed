import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostComment from './PostComment'
import { sub } from 'date-fns'

configure({ adapter: new Adapter() })

const postId = "123"
const comment = { 
    id: '111',
    user: {
        name: 'Mary',
        location: 'Florida'
    },
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    content: 'This is a comment.',
    likes: 0
}
let wrapper

beforeEach(() => {
    wrapper = shallow(<PostComment postId={postId} comment={comment}/>)
}) 
    
describe('PostComment', () => {
    it ('renders the correct info for user making comment', () => {
        expect(wrapper.find('.user-name').text()).toEqual(comment.user.name)
        expect(wrapper.find('.user-location').text()).toEqual(comment.user.location)
        expect(wrapper.find('.user-comment').text()).toEqual(comment.content)
    })

    it('passes the correct props to custom components', () => {
        expect(wrapper.find('.time-passed').prop('timestamp')).toEqual(comment.date)
        expect(wrapper.find('.comment-reactions').prop('postId')).toEqual(postId)
        expect(wrapper.find('.comment-reactions').prop('comment')).toEqual(comment)
    })
})