import React from 'react'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'

const SinglePost = ({ post }) => {
    return (
        <StyledPost>
            <ProfileSection>
                <ProfilePicture src={profilePicture} alt="profile"/>
                <ProfileInfo>
                    <ProfileName className="name">{post.user.name}</ProfileName>
                    <LocationSection>
                        <ProfileLocation className="location">{post.user.location}</ProfileLocation>
                    </LocationSection>
                </ProfileInfo>
            </ProfileSection>
            <p className="post-content">{post.content}</p>
        </StyledPost>
    )
}

const StyledPost = styled.article`
    padding: 20px 20px 0px 20px;
    margin-top: 12.5px;
    background: #ffffff;
    border-radius: 8px;
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
    `

const LocationSection = styled.div`
    color: #5286F2;
    font-size: 12px;
    `

const ProfileLocation = styled(ProfileText)`
    margin-left: 5px;
    font-weight: bold;
    `


export default SinglePost