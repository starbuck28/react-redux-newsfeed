import React from 'react'
import styled from 'styled-components'
import PostProfile from './PostProfile'
import PostReactions from './PostReactions'

const SinglePost = ({ post }) => {
    return (
        <StyledPost>
            <PostProfile className="profile-section" user={post.user.name} location={post.user.location} date={post.date}/>
            <StyledContent className="post-content">{post.content}</StyledContent>
            <StyledCounterDiv>
                <span className="likes">{post.likes} Likes</span>
                    <Dot>&#183;</Dot>
                <span>0 Comments</span>
            </StyledCounterDiv>
            <PostReactions className="reactions" post={post} />
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

export default SinglePost