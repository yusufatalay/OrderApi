// use es6 syntax for this project
import express from "express";
import http from "http"

const app = express()

const server = http.createServer(app)

app.get('/health', (req, res) => {
    return res.json({
        type: true,
        message : "System is healthy"
    })
})

server.listen(3000,()=>{
    console.log("Server is runnig at localhost:3000")
})
