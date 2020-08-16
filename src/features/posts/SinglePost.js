import React from 'react'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'
import TimePassed from './TimePassed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMapMarker, faCommentDots, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { incrementLike } from './postsSlice'

const SinglePost = ({ post }) => {
    const dispatch = useDispatch()

    return (
        <StyledPost>
            <ProfileSection>
                <ProfilePicture src={profilePicture} alt="profile"/>
                <ProfileInfo>
                    <ProfileName className="name">{post.user.name}</ProfileName>
                    <LocationSection>
                        <FontAwesomeIcon icon={faMapMarker}/>
                        <ProfileLocation className="location">{post.user.location}</ProfileLocation>
                    </LocationSection>
                    <TimePassed timestamp={post.date}></TimePassed>
                </ProfileInfo>
            </ProfileSection>
            <StyledContent className="post-content">{post.content}</StyledContent>
            <StyledCounterDiv>
                <span className="likes">{post.likes} Likes</span>
                    <Dot>&#183;</Dot>
                <span>0 Comments</span>
            </StyledCounterDiv>
            <div>
                <StyledButton 
                    type="button"
                    className="like-button"
                    onClick={() => dispatch(incrementLike({postId: post.id}))}><ButtonIcon icon={faHeart}/>Like</StyledButton>
                <StyledButton><ButtonIcon icon={faCommentDots}/>Comment</StyledButton>
            </div>
        </StyledPost>
    )
}

const StyledPost = styled.article`
    padding: 20px 20px 0px 20px;
    margin-top: 12.5px;
    background: #ffffff;
    border-radius: 8px;
    padding-bottom: 20px;
`

const ProfileSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    `

const ProfilePicture = styled.img`
    width: 50px;
    border-radius: 50%;
    `

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    `

const ProfileText = styled.span`
    margin: 0;
    `

const ProfileName = styled(ProfileText)`
    color: #4E4E5B;
    font-weight: bold; 
    font-size: 15px;
    `

const LocationSection = styled.div`
    color: #5286F2;
    font-size: 12px;
    `

const ProfileLocation = styled(ProfileText)`
    margin-left: 5px;
    font-weight: bold;
    `

const StyledContent = styled.p`
    font-size: 18px;
`

const StyledCounterDiv = styled.div`
    color: #979AA8;
    font-size: 12px;
`

const Dot = styled.span`
    font-weight: 900;
    margin-right: 5px;
    margin-left: 5px;
`

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

export default SinglePost