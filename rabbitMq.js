const amqp = require('amqplib/callback_api');

module.exports = sendMessage = (msg) => {

    const opt = { credentials: require('amqplib').credentials.plain('rabbit', 'AoqqN5gWtuTG') };


    amqp.connect('amqp://35.228.41.68:5672', opt,  function(error0, connection){
        if(error0){
            console.log(error0);
            throw error0;
        }

        connection.createChannel(function(error1, channel1){
            if(error1){
                throw error1;
            }

            const queue = 'test';

            channel1.assertQueue(queue, {
                durable: false
            });

            channel1.sendToQueue(queue, Buffer.from(msg));
            console.log(" [X] Sent %s", msg);
        });
    });
}
