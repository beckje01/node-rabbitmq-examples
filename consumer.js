var http = require('http'),
  url = require('url'),
  amqp = require('amqp');


var rabbitMQ = amqp.createConnection({ host: '127.0.0.1' },{defaultExchangeName: "rabbitExchange"});

rabbitMQ.addListener('ready', function(){
  var queue = rabbitMQ.queue('rabbitQ', function(q){
      // Catch all messages
      q.bind('rabbitExchange','key.a');
      console.log("inqueue")
      // Receive messages
      q.subscribe(function (message) {
        // Print messages to stdout
        console.log("received message");
        console.log(message.data.toString());
      });
    });
  // create the exchange if it doesnt exist
  //var exchange = rabbitMQ.exchange('rabbitExchange')

});  