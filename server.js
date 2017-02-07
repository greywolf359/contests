const express = require('express');
const server = express();
const path = require('path');
const apiRouter =require('./api');
const config = require('./config');
const sassMiddleware = require ("node-sass-middleware");


const port = config.port;
const host = config.host;

server.set('view engine', 'ejs');
const serverRender = require('./severRender');


server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}))

server.get('/', (req,res)=>{
	res.render("index", {content: "this is some <em>content</em>"});
})
server.use(express.static('public'));
server.use('/api',apiRouter);

server.get('/about', (req,res)=>{
	res.sendFile(__dirname + '/public/about.html');
})


server.listen(port, host, ()=>console.log("listening on port ", port, ". host is ", host));