const User = require('../model/signupModel');
const UserMessages = require('../model/chatMessages');

const dbMessages = async (req, res) => {
  try {
    const { message, userId } = req.body;
    console.log(message, userId);
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const userMessage = await UserMessages.create({
      message,
      userId: user.id
    }, {
      include: User
    });
    res.status(201).json({
      messages: userMessage
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  dbMessages
};