import React from 'react'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'

const PostComment = ({ comment }) => {
    return (
        <div>
            <img src={profilePicture} alt="profile"/>
            <div>
                <p>{comment.user.name}</p>
                <p>{comment.user.location}</p>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default PostComment