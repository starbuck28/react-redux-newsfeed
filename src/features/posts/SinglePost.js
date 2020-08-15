import React from 'react'

const SinglePost = ({ post }) => {
    return (
        <article>
            <div>
                <p className="name">{post.user.name}</p>
                <p className="location">{post.user.location}</p>
            </div>
            <p className="post-content">{post.content}</p>
        </article>
    )
}

export default SinglePost