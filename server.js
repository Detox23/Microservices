const express = require('express');
const app = express();
const axios = require('axios');
const hostname = '127.0.0.1';
const sendMessage = require('./rabbitMq');
const advUrl = 'http://psuaddservice.fenris.ucn.dk';
const port = 3000;


app.get('/adv', (req, res)=>{
    axios.get(advUrl).then(response => {
        console.log(response.data)
        res.send(response.data);
    }).catch(error => {
        console.log("Error");
        console.log(error);
    });
})


app.listen(port, () => {
    console.log("Server started");
})



