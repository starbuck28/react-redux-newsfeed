import React from 'react'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'
import TimePassed from './TimePassed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker} from '@fortawesome/free-solid-svg-icons'

const PostProfile = ({ user, location, date }) => {
    return (
        <ProfileSection>
                <ProfilePicture src={profilePicture} alt="profile"/>
                <ProfileInfo>
                    <ProfileName className="name">{user}</ProfileName>
                    <LocationSection>
                        <FontAwesomeIcon icon={faMapMarker}/>
                        <ProfileLocation className="location">{location}</ProfileLocation>
                    </LocationSection>
                    <TimePassed className="time" timestamp={date}></TimePassed>
                </ProfileInfo>
            </ProfileSection>
    )
}

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

export default PostProfile