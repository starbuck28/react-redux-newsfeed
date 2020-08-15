import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SinglePost from './SinglePost'

configure({ adapter: new Adapter() })

describe('Single Post', () => {
    it ('renders the correct post elements', () => {
        let post = { 
            id: '1',
            user: {
                name: 'Cookie Monster',
                location: 'Sesame Street'
            },
            content: 'Me want cookie.',
        }
        let wrapper = shallow(<SinglePost key={post.id} post={post}/>)

        expect(wrapper.find('.name').text()).toEqual(post.user.name)
        expect(wrapper.find('.location').text()).toEqual(post.user.location)
        expect(wrapper.find('.post-content').text()).toEqual(post.content)
    })
})