const io=require('socket.io')(8000,{
    cors :{
        origin : ['http://localhost:3000']
    }
})

io.on('connection', socket =>{
    console.log(socket.handshake.address);
    socket.on('send-chat-message',message =>{
        socket.broadcast.emit('chat-message',message)
    })
    
})
