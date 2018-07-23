require('dotenv').config();

var express = require('express'); 
var app = express();
var user = require('./controllers/usercontroller')
var stat = require('./controllers/statcontroller')
var event = require('./controllers/eventcontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/user', user)
app.use(require('./middleware/validate-session'))
app.use('/event', event)
app.use('/stat', stat)



app.listen(3000, () => {
    console.log('App is listening on 3000.')
});