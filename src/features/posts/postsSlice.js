import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload)
        },
        incrementPostLike(state, action) {
            const {postId} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.likes += 1
            }
        },
        addComment(state, action) {
            const { postId, comment } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.comments.total++
                existingPost.comments.individualComments.push(comment)
            }
        },
        incrementCommentLike(state, action) {
            const {postId, commentId} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                const postComments = existingPost.comments.individualComments
                const existingComment = postComments
                    .find(comment => comment.id === commentId)
                
                if (existingComment) {
                    existingComment.likes += 1
                } 
            }
            
        },
        editComment(state, action) {
            const {postId, commentId, content} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                const postComments = existingPost.comments.individualComments
                const existingComment = postComments
                    .find(comment => comment.id === commentId)
                
                if (existingComment) {
                    existingComment.content = content
                }
            }
        },
        toggleEditForm(state, action) {
            const {postId, commentId, showCommentForm} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                const postComments = existingPost.comments.individualComments
                const existingComment = postComments
                    .find(comment => comment.id === commentId)

                    if (existingComment) {
                        existingComment.showCommentForm = showCommentForm
                    }
            }
        },
        deleteComment(state, action) {
            const {postId, commentId} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                const postComments = existingPost.comments.individualComments
                const existingComment = postComments
                    .find(comment => comment.id === commentId)
                
                if (existingComment) {
                    postComments.splice(postComments.indexOf(existingComment), 1)
                    existingPost.comments.total -= 1
                }
            }
        },
        toggleCommentSection(state, action) {
            const {postId, showComments} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.showComments = showComments
            }
        },
        updatePosts(state, action) {
            const {posts} = action.payload
            return posts
        }
    }
})

export const { 
    addPost, 
    incrementPostLike, 
    addComment, 
    incrementCommentLike, 
    editComment, 
    toggleEditForm, 
    deleteComment,
    toggleCommentSection,
    updatePosts } = postsSlice.actions

export default postsSlice.reducer


