const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    id: String,
    user: {
        name: String,
        location: String
    },
    date: String,
    content: String,
    likes: Number,
    showCommentForm: Boolean
})

const postsSchema = new Schema({
    id: String,
    date: String,
    user: {
        name: String,
        location: String
    },
    content: String,
    likes: Number,
    showComments: Boolean,
    comments: {
        total: Number,
        individualComments: [commentSchema]
    }
}, {
        collection: 'posts'
    })

const PostModel = mongoose.model('Posts', postsSchema)
module.exports = PostModel