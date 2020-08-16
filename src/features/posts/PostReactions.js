import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { incrementPostLike, toggleCommentSection } from './postsSlice'
import CommentForm from './CommentForm'
import { orderByMostRecent } from '../../transformers'
import PostComment from './PostComment'

const PostReactions = ({ post }) => {
    const dispatch = useDispatch()
    const comments = post.comments.individualComments

    const renderedComments = orderByMostRecent(comments).map(comment => (
        <PostComment key={comment.id} postId={post.id} comment={comment}/>
    ))

    const handleLikeButtonClick = () => dispatch(incrementPostLike({postId: post.id}))
    const handleCommentButtonClick = () => dispatch(toggleCommentSection({postId: post.id, showComments: !post.showComments}))

    return (
        <StyledReactions>
            <StyledButton 
                type="button"
                data-testid="like-button"
                onClick={handleLikeButtonClick}>
                    <ButtonIcon icon={faHeart}/>
                    Like
            </StyledButton>
            <StyledButton
                type="button"
                data-testid="post-comment-button"
                onClick={handleCommentButtonClick}>
                    <ButtonIcon icon={faCommentDots}/>
                    Comment
            </StyledButton>
            {post.showComments && 
                <CommentForm post={post}/>
            }   
            {renderedComments && post.showComments &&
                <div data-testid="rendered-comments">
                {renderedComments} 
                </div>
            }
        </StyledReactions>
    )
}

const StyledReactions = styled.div`
    padding: 10px 20px 20px 20px;
    background: #f7f7f7;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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