// usei o express pra criar e configurar meu serivdor
const express = require('express')
const server = express()

// configurar arquivos estáticos (css, scripts, imgs)
server.use(express.static("backup_app"))

// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    // return res.send("Resposta do servidor")
    return res.sendFile(__dirname + "/index.html")
})

server.get("/login", function(req, res) {
    // return res.send("Resposta do servidor")
    return res.sendFile(__dirname + "/login.html")
})

server.get("/signup", function(req, res) {
    // return res.send("Resposta do servidor")
    return res.sendFile(__dirname + "/signup.html")
})

// ligo meu servidor
server.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port: example:' + 3000);
});


