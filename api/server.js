// implement your server here
// require your posts router and connect it here

const express = require('express');
const router = require('./posts/posts-router');

// Create server instance
const server = express()
server.use(express.json());

// Import (require) model and configure routers
const postsModel = require('./posts/posts-model');
const postsRouter = require('./posts/posts-router');

server.use('/api/posts', postsRouter)

// Create root endpoint response
server.get('/', (req, res) => {
    res.send(`
        <h2>Landing Page</h2>
        <p>Server Running</p>
    `)
})

module.exports = server