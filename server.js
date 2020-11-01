const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const axios = require('axios');

function getAdvertisement(){
    axios.get("http://psuaddservice.fenris.ucn.dk")
        .then(function(response){
            if(response.data.toLowerCase().includes("sorry")){
                console.log("Error");
            }else{
                console.log(response.data)
            }

        }).catch(function(error){
        console.log(error)
    })
}


const requestListener = function(req, res){
    switch(req.url){
        case "/adv":
            res.writeHead(200);
            res.end(getAdvertisement());
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify("Error"));
    }


    res.writeHead(200);
    res.end("Server!");
};


const server = http.createServer(requestListener);
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})



