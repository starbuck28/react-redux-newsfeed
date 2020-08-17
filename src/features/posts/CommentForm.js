import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addComment } from './postsSlice'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'
import { getCurrentTimestamp, getRandomId } from '../../transformers'

const CommentForm = ({ post }) => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const onTextChanged = event => setContent(event.target.value)

    const onCommentSubmit = (event) => {
        event.preventDefault()
        let comment = {
            id: getRandomId(),
            user: {
                name: 'Maya',
                location: 'Pandora'
            },
            date: getCurrentTimestamp(),
            content,
            likes: 0,
            showCommentForm: false
        }
        dispatch(addComment({postId: post.id, comment}))
        setContent("")
    }

    return (
        <StyledForm data-testid="comment-form" onSubmit={onCommentSubmit}>
            <StyledPhoto src={profilePicture} alt="profile"/>
            <StyledInput 
                type="text"
                id="postComment"
                placeholder="Add a comment"
                value={content}
                onChange={onTextChanged}></StyledInput>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    margin-top: 10px;
    align-items: center;
    `

const StyledPhoto = styled.img`
    width: 35px;
    border-radius: 50%;
    `

const StyledInput = styled.input`
    flex-grow: 4;
    padding: 15px;
    border-radius: 35px;
    margin-left: 10px;
    border: 1px solid #979AA8;

    &:focus {
    outline: none;
    }
    `

export default CommentForm