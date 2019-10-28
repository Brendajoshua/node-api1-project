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
});

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    db.findById(id)
    .then(dbById => {
        if (dbById) {
            res.send(dbById);
        } else {
            res.status(404).json({
                message: "The user with the specified ID does not exist."
            })
        }
    })
    .catch(error => 
        res
        .status(500)
        .json({ error: "The user information could not be retrieved."})
    ); 
});


server.listen(process.env.PORT || 5000, () => {
    console.log('listening on' + (process.env.PORT || 5000));
})