require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// -- settings
app.set('port', process.env.PORT);

// -- middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// -- routes

// -- start the app
app.listen(app.get('port'), function () {
    console.log(`Running at Port ${app.get('port')}`);
});