const express = require('express');

const server = express(); 
const port = process.env.PORT || 3000;

//ROUTE
server.get('/', (req, res) => {
        res.send("welcome to my app")
})


server.listen(port, () => {
    console.log(`server listing on port ${port}`)
});