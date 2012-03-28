var http = require('http'),
	url = require('url'),
	amqp = require('amqp');

var exchange

function sendMsg(msg)
{
  console.log(msg)
  if(exchange)
  {  
    
    exchange.publish('key.a',msg)

  }
  else
  {
    console.log("exchange not around now...")
  }
}

var server = http.createServer(function(req, res){ 
	// your normal server code 
  	var path = url.parse(req.url).pathname;
  

	sendMsg(path);
	res.writeHead(200, {'Content-Type':'text/html'})
	res.write('OK', 'utf8');
	res.end();
});




var rabbitMQ = amqp.createConnection({ host: '127.0.0.1' });

rabbitMQ.addListener('ready', function(){
  
  // create the exchange if it doesnt exist
  exchange = rabbitMQ.exchange('rabbitExchange')

});  






server.listen(8081);


