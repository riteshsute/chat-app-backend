const { userInfo } = require('os');
const User = require('../model/chatMessages');


const addMessages =  (async (req, res) => {
    try {
        const message = req.body.message;
        const userId = req.body.userId;
        console.log(userId)
        console.log(message)
        const user = await User.create(({ message, userId: userId }));

        res.status(201).json({
            messages: message
    })}
    catch (err) { 
        res.status(500).json({success: false, message: err} )
        console.log(err)
      }
})

const getMessages = ( async ( req, res) => {
    try {
    const Message = await User.findAll()
    res.status(200).json({allMessages: Message})
    }
    catch (err) {
        res.status(500).json({ success: false, message: err });
    }
})
 

module.exports = {
    addMessages,
    getMessages
}