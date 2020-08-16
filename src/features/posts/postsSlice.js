import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    { 
        id: '1',
        date: sub(new Date(), { minutes: 22 }).toISOString(),
        user: {
            name: 'Maya',
            location: 'Pandora'
        },
        content: 'This is my very first post!',
        likes: 0,
        showComments: false,
        comments: {
            total: 0, 
            individualComments: []
        }
    },
    {
        id: '2',
        date: sub(new Date(), { minutes: 15 }).toISOString(),
        user: {
            name: 'Maya',
            location: 'Pandora'
        },
        content: 'Claptrap, where are you?',
        likes: 0,
        showComments: false,
        comments: {
            total: 1,
            individualComments: [
                { 
                    id: '123',
                    user: {
                        name: 'Maya',
                        location: 'Pandora'
                    },
                    date: sub(new Date(), { minutes: 20 }).toISOString(),
                    content: 'Seriously, where are you?',
                    likes: 0,
                    showCommentForm: false
                }
            ]
        }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(content) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        user: {
                            name: 'Maya',
                            location: 'Pandora'
                        },
                        content,
                        likes: 0,
                        showComments: false,
                        comments: {
                            total: 0,
                            individualComments: []
                        }
                    }
                }
            }
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
                }
            }
        },
        toggleCommentSection(state, action) {
            const {postId, showComments} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.showComments = showComments
            }
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
    toggleCommentSection } = postsSlice.actions

export default postsSlice.reducer


