import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from './SinglePost'

const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <SinglePost key={post.id} post={post}/>
    ))

    return (
        <section>{renderedPosts}</section>
    )
}

export default PostsList