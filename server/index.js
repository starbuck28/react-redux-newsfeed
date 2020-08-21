const express = require('express')
const bodyParser = require('body-parser')
const PostModel = require('../models/posts-model')
const pino = require('express-pino-logger')()

const mongoose = require('mongoose')

const app = express()

const uri = 'mongodb+srv://admin:newsfeed-redux@cluster0.ivn6t.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(uri, {dbName: 'db'})
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err))

mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

app.get('/api/posts', (req, res, next) => {
  PostModel.find({})
  .then(data => res.json(data))
  .catch(next)
})
  
  app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
  )