import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
// import favicon from 'serve-favicon';
const bitCoin = require('./crypto');

import index from './routes/index';
import login from './routes/index';
import admin from './routes/index';

const socket_io = require("socket.io");

// Express
const app = express();

// Socket.io
const io = socket_io();
app.io = io;


// socket.io events
io.on("connection", function(socket)
{
   console.log("A user connected");
});



//const app = express();
//const server = require('http').createServer(app);
//const io = require('socket.io').listen(server);

bitCoin(io);

io.on('connection', function (socket) {
   socket.emit('Rate', { hello: 'world' });
   socket.on('my other event', function (data) {
      console.log(data);
   });
});


const debug = Debug('crypto-martket-watcher:app');
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
