// implement your API here
const express = require('express')
const cors = require('cors')

const db = require('./data/db.js')

const server = express()

server.use(cors())
server.use(express.json())


server.get("/api/users", (req, res) => {
    db.find()
    .then(users => res.send(users))
    .catch(error => 
        res.status(500).json({
            error: "The users information could not be retrieved."
        })
        );
})


server.listen(process.env.PORT || 5000, () => {
    console.log('listening on' + (process.env.PORT || 5000));
})