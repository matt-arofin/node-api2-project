// require your server and launch it here
// const express = require('express')

const server = require('./api/server');
const port = 9000

server.listen(port, () => console.log(`server is running on port ${port}`))