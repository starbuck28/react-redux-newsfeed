import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { incrementCommentLike, toggleEditForm } from './postsSlice'

const CommentReactions = ({postId, comment}) => {
    const dispatch = useDispatch()

    const handleLikeClick = () => dispatch(incrementCommentLike({postId, commentId: comment.id}))
    const handleEditClick = () => dispatch(toggleEditForm({postId, commentId: comment.id, showCommentForm: !comment.showCommentForm}))

    return (
        <StyledReactionsDiv>
            <StyledCount className="likes-count">{comment.likes} Likes</StyledCount>
            <span>|</span>
            <StyledButton 
                type="button"
                data-testid="comment-like-button"
                onClick={handleLikeClick}>
                    <ButtonIcon icon={faHeart}/>
                    Like
            </StyledButton>
            <span>|</span>
            <StyledButton 
                type="button"
                data-testid="comment-edit-button"
                onClick={handleEditClick}>
                    <ButtonIcon icon={faPencilAlt}/>
                    Edit
            </StyledButton>
            <span>|</span>
            <StyledButton 
                type="button"
                data-testid="comment-delete-button"><ButtonIcon icon={faTrash}/>Delete</StyledButton>
            </StyledReactionsDiv>
    )
}

const StyledReactionsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    `

const StyledCount = styled.span`
    padding-right: 10px;
    `

const StyledButton = styled.button`
    color: #737384;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    background-color: #DAE1EA;
    &:focus {
        outline: none;
      }
    `

const ButtonIcon = styled(FontAwesomeIcon)`
    margin-right: 5px;
    `
export default CommentReactions