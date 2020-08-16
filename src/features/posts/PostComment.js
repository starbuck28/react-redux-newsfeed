import React from 'react'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'
import TimePassed from './TimePassed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { incrementCommentLike } from './postsSlice'
import { useDispatch } from 'react-redux'

const PostComment = ({ postId, comment }) => {
    const dispatch = useDispatch()
    const handleLikeClick = () => dispatch(incrementCommentLike({postId, commentId: comment.id}))
    return (
        <StyledComment>
            <StyledImage src={profilePicture} alt="profile"/>
            <StyledInfo>
                <SplitInfo>
                    <StyledName>{comment.user.name}</StyledName>
                    <TimePassed timestamp={comment.date}/>
                </SplitInfo>
                <StyledLocation>{comment.user.location}</StyledLocation>
                <span>{comment.content}</span>
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
            </StyledInfo>
            
        </StyledComment>
    )
}

const StyledComment = styled.div`
    display: flex;
    align-items: center;
    `

const StyledImage = styled.img`
    width: 35px;
    border-radius: 50%
    `

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #DAE1EA;
    margin-left: 10px;
    font-size: 10px;
    flex-grow: 4;
    border-radius: 8px;
    padding: 15px;
    margin-top: 15px;
    `

const SplitInfo = styled.div`
    display: flex;
    justify-content: space-between;
    `

const StyledName = styled.div`
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 3px;
    `

const StyledLocation = styled.div`
    color: #5286F2;
    padding-bottom: 3px;
    `

export default PostComment