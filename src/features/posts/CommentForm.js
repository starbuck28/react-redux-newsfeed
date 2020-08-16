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
        <StyledForm onSubmit={onCommentSubmit}>
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
    `

const StyledPhoto = styled.img`
    width: 35px;
    border-radius: 50%;
    `

const StyledInput = styled.input`
    flex-grow: 4;
    padding-left: 15px;
    border-radius: 35px;
    margin-left: 10px;
    border: 1px solid #979AA8;

    &:focus {
    outline: none;
    }
    `

export default CommentForm