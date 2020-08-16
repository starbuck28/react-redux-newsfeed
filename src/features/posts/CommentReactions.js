import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { incrementCommentLike } from './postsSlice'

const CommentReactions = ({postId, comment}) => {
    const dispatch = useDispatch()
    const handleLikeClick = () => dispatch(incrementCommentLike({postId, commentId: comment.id}))

    return (
        <div>
            <span>{comment.likes} Likes</span>
            <span>|</span>
            <button 
                type="button"
                className="comment-like"
                onClick={handleLikeClick}>
                    <FontAwesomeIcon icon={faHeart}/>
                    Like
            </button>
            <span>|</span>
            <button type="button"><FontAwesomeIcon icon={faPencilAlt}/>Edit</button>
            <span>|</span>
            <button type="button"><FontAwesomeIcon icon={faTrash}/>Delete</button>
            </div>
    )
}

export default CommentReactions