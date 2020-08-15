import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addPost } from './postsSlice'

const PostForm = () => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()
    
    const onTextChanged = event => setContent(event.target.value)

    const onPostClicked = () => {
        if (content) {
            dispatch(addPost({
                id: nanoid(),
                user: {
                    name: 'Maya',
                    location: 'Pandora'
                },
                content
            }))
            setContent("")
        }
    }

    return (
        <section>
            <form>
                <input 
                    type="text"
                    id="postContent"
                    value={content}
                    onChange={onTextChanged}>
                </input>
                <button type="button" onClick={onPostClicked}>Post It</button>
            </form>
        </section>
    )
}

export default PostForm