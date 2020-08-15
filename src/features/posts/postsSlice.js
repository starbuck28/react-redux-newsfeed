import { createSlice } from '@reduxjs/toolkit'

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

    }
})

export default postsSlice.reducer