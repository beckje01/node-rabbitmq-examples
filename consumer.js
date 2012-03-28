var http = require('http'),
  url = require('url'),
  amqp = require('amqp');


var rabbitMQ = amqp.createConnection({ host: '127.0.0.1' });

rabbitMQ.addListener('ready', function(){
  var queue = rabbitMQ.queue('',{'exclusive':true}, function(q){

      //get all messages for the rabbitExchange
      q.bind('rabbitExchange','#');
      console.log("inqueue")
      // Receive messages
      q.subscribe(function (message) {
        // Print messages to stdout
        console.log("received message");
        console.log(message.data.toString());
      });
    });

});  