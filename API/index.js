const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes/routes');

// init
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// require db
require('./db');


// middlewares
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/',routes);

// initialize server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
