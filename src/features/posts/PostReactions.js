import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { incrementLike } from './postsSlice'

const PostReactions = ({ post }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <StyledButton 
                type="button"
                className="like-button"
                onClick={() => dispatch(incrementLike({postId: post.id}))}><ButtonIcon icon={faHeart}/>Like</StyledButton>
            <StyledButton><ButtonIcon icon={faCommentDots}/>Comment</StyledButton>
        </div>
    )
}

const StyledButton = styled.button`
    color: #737384;
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