const express = require('express');
const app = express();
const axios = require('axios');
const sendMessage = require('./rabbitMq');
const advUrl = 'http://psuaddservice.fenris.ucn.dk';



app.get('/adv', (req, res)=>{
    axios.get(advUrl).then(response => {
        console.log(response.data)
        res.send(response.data);
    }).catch(error => {
        console.log("Error");
        console.log(error);
    });
})


app.listen(5000, () => {
    console.log("Server started");
})



