import React from 'react'
import { useSelector } from 'react-redux'

const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <div>
                <p>{post.user.name}</p>
                <p>{post.user.location}</p>
            </div>
            <p>{post.content}</p>
        </article>
    ))

    return (
        <section>{renderedPosts}</section>
    )
}

export default PostsList