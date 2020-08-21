import React from 'react'
import SinglePost from './SinglePost'
import styled from 'styled-components'
import { orderByMostRecent } from '../../transformers'

const PostsList = ({posts}) => {

    const renderedPosts = orderByMostRecent(posts).map((post) => (
        <SinglePost key={post.id} post={post}/>
    ))

    return (
        <StyledList className="posts-list">{renderedPosts}</StyledList>
    )
}

const StyledList = styled.section`
    width: 95%;
    margin-bottom: 12.5px;
    `

export default PostsList