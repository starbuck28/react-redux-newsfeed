import React from 'react'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'
import TimePassed from './TimePassed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMapMarker, faCommentDots, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

const SinglePost = ({ post }) => {
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

export default SinglePost