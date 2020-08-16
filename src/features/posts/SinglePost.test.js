import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SinglePost from './SinglePost'
import { sub } from 'date-fns'

configure({ adapter: new Adapter() })

describe('Single Post', () => {
    const post = { 
        id: '1',
        date: sub(new Date(), { minutes: 2 }).toISOString(),
        user: {
            name: 'Cookie Monster',
            location: 'Sesame Street'
        },
        content: 'Me want cookie.',
        likes: 5
    }
    let wrapper
    
    beforeEach(() => {
        wrapper = shallow(<SinglePost key={post.id} post={post}/>)
    })

    it('renders the correct profile information', () => {
        expect(wrapper.find('.profile-section').props()).toEqual({className: "profile-section", user: post.user.name, location: post.user.location, date: post.date})
    })

    it('renders the correct content', () => {
        expect(wrapper.find('.post-content').text()).toEqual(post.content)
    })

    it('renders the correct likes', () => {
        expect(wrapper.find('.likes').text()).toEqual(`${post.likes} Likes`)
    })

    it('renders reactions with correct props', () => {
        expect(wrapper.find('.reactions').prop('post')).toEqual(post)
    })
})