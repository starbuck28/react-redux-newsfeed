import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addComment } from './postsSlice'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'


const CommentForm = ({ post }) => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const onTextChanged = event => setContent(event.target.value)

    const onCommentSubmit = (event) => {
        event.preventDefault()
        let comment = {
            id: nanoid(),
            user: {
                name: 'Maya',
                location: 'Pandora'
            },
            date: new Date().toISOString(),
            content
        }
        dispatch(addComment({postId: post.id, comment}))
        setContent("")
    }

    return (
        <form onSubmit={onCommentSubmit}>
            <img src={profilePicture} alt="profile"/>
            <input 
                type="text"
                id="postComment"
                placeholder="Add a comment"
                value={content}
                onChange={onTextChanged}></input>
        </form>
    )
}

export default CommentForm