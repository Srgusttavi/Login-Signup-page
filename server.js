// Importing the Express framework
const express = require('express')

// Creating an Express server instance
const server = express()

// Serving static files from the "backup_app" directory
server.use(express.static("backup_app"))

// Handling GET requests to the root URL ("/") 
server.get("/", function(req, res) {
    // Sending the "index.html" file as a response
    return res.sendFile(__dirname + "/index.html")
})

// Handling GET requests to the "/login" URL
server.get("/login", function(req, res) {
    // Sending the "login.html" file as a response
    return res.sendFile(__dirname + "/login.html")
})

// Handling GET requests to the "/signup" URL
server.get("/signup", function(req, res) {
    // Sending the "signup.html" file as a response
    return res.sendFile(__dirname + "/signup.html")
})

// Listening for connections on port 3000
// The server is configured to accept connections from any IP address ('0.0.0.0')
server.listen(3000, '0.0.0.0', function() {
    // Logging a message when the server starts listening
    console.log('Listening to port: example:' + 3000);
});


