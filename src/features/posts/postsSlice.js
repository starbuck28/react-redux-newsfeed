import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    { 
        id: '1',
        user: {
            name: 'Maya',
            location: 'Pandora'
        },
        content: 'This is my very first post!',
    },
    {
        id: '2',
        user: {
            name: 'Maya',
            location: 'Pandora'
        },
        content: 'Claptrap, where are you?'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(content) {
                return {
                    payload: {
                        id: nanoid(),
                        user: {
                            name: 'Maya',
                            location: 'Pandora'
                        },
                        content
                    }
                }
            }
        } 
    }
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer