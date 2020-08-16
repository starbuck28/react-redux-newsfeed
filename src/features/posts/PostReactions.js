import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { incrementLike } from './postsSlice'
import CommentForm from './CommentForm'
import { orderByMostRecent } from '../../transformers'
import PostComment from './PostComment'

const PostReactions = ({ post }) => {
    const dispatch = useDispatch()
    const comments = post.comments.individualComments
    console.log(comments)

    const renderedComments = orderByMostRecent(comments).map(comment => (
        <PostComment key={comment.id} comment={comment}/>
    ))
    return (
        <StyledReactions>
            <StyledButton 
                type="button"
                className="like-button"
                onClick={() => dispatch(incrementLike({postId: post.id}))}><ButtonIcon icon={faHeart}/>Like</StyledButton>
            <StyledButton><ButtonIcon icon={faCommentDots}/>Comment</StyledButton>
            <CommentForm post={post}/>
            {renderedComments && 
            <div>
               {renderedComments} 
            </div>
            }
        </StyledReactions>
    )
}

const StyledReactions = styled.div`
    padding: 10px 20px 0px 20px;
    background: #f7f7f7;
    `

const StyledButton = styled.button`
    color: #737384;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    background-color: #f7f7f7;
    &:focus {
        outline: none;
      }
`

const ButtonIcon = styled(FontAwesomeIcon)`
    margin-right: 5px;
`

export default PostReactions