// Express here
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router')

const server = express();
const port = 3000;

server.use(morgan('dev')); //morgan console logs request to server
server.use(bodyParser.json()); //parses request and response bodies, wo it we only get buffers
server.use('/', express.static(path.join(__dirname, '../client/dist'))); //takes in directory name in static connects to index.html 

server.use('/api', router)//anything that goes to api endopoint is redirected to router

server.listen(port, () => console.log(`connected to port ${port}`));

