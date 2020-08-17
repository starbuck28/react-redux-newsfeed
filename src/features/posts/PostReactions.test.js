import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostReactions from './PostReactions'
import { sub } from 'date-fns'
import { orderByMostRecent } from 'transformers'
import { incrementCommentLike } from './postsSlice';

configure({ adapter: new Adapter() })

jest.mock('transformers', () => ({
    orderByMostRecent: jest.fn()
}))

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))

const listOfComments = [
    { 
        id: '123',
        user: {
            name: 'Mary',
            location: 'Florida'
        },
        date: sub(new Date(), { minutes: 20 }).toISOString(),
        content: 'This is a comment.',
        likes: 0
    },
    { 
        id: '321',
        user: {
            name: 'John',
            location: 'California'
        },
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        content: 'This is a another comment.',
        likes: 0
    }
]

const orderedListOfComments = [
    { 
        id: '321',
        user: {
            name: 'John',
            location: 'California'
        },
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        content: 'This is a another comment.',
        likes: 0
    },
    { 
        id: '123',
        user: {
            name: 'Mary',
            location: 'Florida'
        },
        date: sub(new Date(), { minutes: 20 }).toISOString(),
        content: 'This is a comment.',
        likes: 0
    }
]

describe('PostReactions', () => {
    it('displays a list of comments in order by most recent', () => {
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
                    individualComments: listOfComments
                }
            }
        
        let wrapper = shallow(<PostReactions post={post}/>)

        orderByMostRecent.mockImplementation(() => {
            return orderedListOfComments
        })

        expect(wrapper.find('[data-testid="rendered-comments"]').children()).toHaveLength(2)
        expect(wrapper.find('[data-testid="rendered-comments"]').childAt(0).prop('comment')).toEqual(post.comments.individualComments[1])
        expect(wrapper.find('[data-testid="rendered-comments"]').childAt(1).prop('comment')).toEqual(post.comments.individualComments[0])
    })

    it('does not display comments if there are none', () => {
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

        orderByMostRecent.mockImplementation(() => {
            return null
        })

        let wrapper = shallow(<PostReactions post={post}/>)

        expect(wrapper.find('[data-testid="rendered-comments"]').children()).toHaveLength(0)
    })

    it('does not show comments if state is set to hide comments', () => {
        const post = {
            id: '1',
            date: sub(new Date(), { minutes: 2 }).toISOString(),
            user: {
                name: 'Cookie Monster',
                location: 'Sesame Street'
            },
            content: 'Me want cookie.',
            likes: 5,
            showComments: false,
            comments: {
                likes: 0,
                individualComments: listOfComments
            }
        }
    
        let wrapper = shallow(<PostReactions post={post}/>)

        orderByMostRecent.mockImplementation(() => {
            return orderedListOfComments
        })

        expect(wrapper.find('[data-testid="rendered-comments"]').children()).toHaveLength(0)
    })

    it('increments likes when like button is clicked', () => {
        const post = {
            id: '1',
            date: sub(new Date(), { minutes: 2 }).toISOString(),
            user: {
                name: 'Cookie Monster',
                location: 'Sesame Street'
            },
            content: 'Me want cookie.',
            likes: 5,
            showComments: false,
            comments: {
                likes: 0,
                individualComments: listOfComments
            }
        }
    
        let wrapper = shallow(<PostReactions post={post}/>)

        orderByMostRecent.mockImplementation(() => {
            return orderedListOfComments
        })

        wrapper.find('[data-testid="like-button"]').simulate('click')

        expect(mockDispatch).toHaveBeenCalledWith({"payload": {"postId": "1"}, "type": "posts/incrementPostLike"})
    })

    it('toggles the comment section on comment button click', () => {
        const post = {
            id: '1',
            date: sub(new Date(), { minutes: 2 }).toISOString(),
            user: {
                name: 'Cookie Monster',
                location: 'Sesame Street'
            },
            content: 'Me want cookie.',
            likes: 5,
            showComments: false,
            comments: {
                likes: 0,
                individualComments: listOfComments
            }
        }
    
        let wrapper = shallow(<PostReactions post={post}/>)

        orderByMostRecent.mockImplementation(() => {
            return orderedListOfComments
        })

        wrapper.find('[data-testid="post-comment-button"]').simulate('click')

        expect(mockDispatch).toHaveBeenCalledWith({"payload": {"postId": "1", showComments: true}, "type": "posts/toggleCommentSection"})
    })
})