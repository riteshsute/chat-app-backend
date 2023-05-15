const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const bodyParser = require('body-parser');

const cors = require('cors')
 
app.use(cors({
    credentials: true
}));

const SignupRoute = require('./routes/signupRoute');

const ChatMessagesRoute = require('./routes/chatMessagesRoute')

const sequelize = require('./util/database');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const Chats = require('./model/chatMessages');
const User = require('./model/signupModel');

User.hasMany(Chats);
Chats.belongsTo(User);

app.use('/ChatApp', SignupRoute);
app.use('/ChatApp', ChatMessagesRoute)

sequelize
    // .sync({ force: true })   
    .sync() 
    .then(result => { 
        app.listen(3000);
    }) 
    .catch(err => console.log(err));  
