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
            <input 
                type="text"
                id="editComment"
                value={content}
                onChange={onTextChanged}
            ></input>
        </form>
    )
}

export default EditCommentForm