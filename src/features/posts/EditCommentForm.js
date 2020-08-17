import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { editComment, toggleEditForm } from './postsSlice'

const EditCommentForm = ({ postId, comment }) => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const onTextChanged = event => setContent(event.target.value)

    const onEditedCommentSubmit = (event) => {
        event.preventDefault()
        dispatch(editComment({postId, commentId: comment.id, content}))
        dispatch(toggleEditForm({postId, commentId: comment.id, showCommentForm: !comment.showCommentForm}))
        setContent("")
    }

    return (
        <form onSubmit={onEditedCommentSubmit}>
            <StyledInput 
                type="text"
                id="editComment"
                value={content}
                onChange={onTextChanged}
            ></StyledInput>
        </form>
    )
}

const StyledInput = styled.input`
    flex-grow: 4;
    padding: 15px;
    border-radius: 35px;
    border: 1px solid #979AA8;
    margin-top: 10px;
    width: 90%;
    
    &:focus {
    outline: none;
    }
    `   

export default EditCommentForm