import React from 'react'
import styled from 'styled-components'
import PostProfile from './PostProfile'
import PostReactions from './PostReactions'

const SinglePost = ({ post }) => {
    return (
        <StyledPost>
            <StyledDisplayInfo>
                <PostProfile data-testid="profile-section" user={post.user.name} location={post.user.location} date={post.date}/>
                <StyledContent data-testid="post-content">{post.content}</StyledContent>
                <StyledCounterDiv>
                    <span data-testid="likes">{post.likes} Likes</span>
                        <Dot>&#183;</Dot>
                    <span>{post.comments.total} Comments</span>
                </StyledCounterDiv>
            </StyledDisplayInfo>
            <Divider></Divider>
            <PostReactions data-testid="reactions" post={post} />
        </StyledPost>
    )
}

const StyledPost = styled.article`
    margin-top: 12.5px;
    background: #ffffff;
    border-radius: 8px;
`

const StyledDisplayInfo = styled.div`
    padding: 20px 20px 10px 20px;
    `

const StyledContent = styled.p`
    font-size: 15px;
`

const StyledCounterDiv = styled.div`
    color: #979AA8;
    font-size: 12px;
`

const Divider = styled.hr`
    margin: 0px;
    border-top: 1px solid #DFDFDF;
    `

const Dot = styled.span`
    font-weight: 900;
    margin-right: 5px;
    margin-left: 5px;
`

export default SinglePost