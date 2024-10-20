const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) =>{
    // ws é a variavel do usuario atual
    // mensagem de erro 
    ws.on("error", console.error)

    // função que será executada quando o usuario enviar uma mensagem para o servidor 
    ws.on("message", (data) =>{
        console.log(data.toString());

        // envia a mensagem de um cliente do servidor para todos os outros
        wss.clients.forEach((client) => client.send(data.toString()))
    })

    console.log("client connected");
    
})
