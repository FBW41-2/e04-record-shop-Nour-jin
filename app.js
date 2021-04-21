/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const corsMiddleware = require('./middleware/cors')

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recordRouter = require('./routes/record');
/** INIT */
const app = express();


app.use(corsMiddleware);
/** LOGGING */
app.use(logger('dev'));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/record', recordRouter);

/** EXPORT PATH */
module.exports = app;
