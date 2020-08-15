import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from './SinglePost'
import styled from 'styled-components'
import { orderByMostRecent } from '../../transformers'

const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = orderByMostRecent(posts).map(post => (
        <SinglePost key={post.id} post={post}/>
    ))

    return (
        <StyledList className="posts-list">{renderedPosts}</StyledList>
    )
}

const StyledList = styled.section`
    background: #f7f7f7;
    width: 500px;
    padding: 12.5px;
    `

export default PostsList