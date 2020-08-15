import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    { 
        id: '1',
        date: sub(new Date(), { minutes: 22 }).toISOString(),
        user: {
            name: 'Maya',
            location: 'Pandora'
        },
        content: 'This is my very first post!',
    },
    {
        id: '2',
        date: sub(new Date(), { minutes: 15 }).toISOString(),
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
                        date: new Date().toISOString(),
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