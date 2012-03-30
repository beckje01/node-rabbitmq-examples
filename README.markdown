# NodeJS RabbitMQ Example #

## Overview ##
An all node.js example of using RabbitMQ as a publish and subscribe.

## Producer ##
A simple webserver that will push any items from the request url to a message queue set up for fanout.  

## Consumer ##
A consumer that will simply report to the console log when a message is received and the text of the message. You can add many consumers for the 1 producer. 

## Why ##
I found the documentation for consuming messages with node to be good, I found the producing side of things a bit tricky most examples used another backend to produce such as groovy or rails. So I wanted to have a simple node only example. I haven't done anything interesting on the consumer side but you could hook these items up with socketio or many other options.