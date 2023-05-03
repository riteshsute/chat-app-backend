const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const bodyParser = require('body-parser');

const cors = require('cors')

app.use(cors());

const SignupRoute = require('./routes/signupRoute');

const sequelize = require('./util/database');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(SignupRoute);

sequelize
    // .sync({ force: true })   
    .sync() 
    .then(result => { 
        app.listen(3000);
    }) 
    .catch(err => console.log(err));  
