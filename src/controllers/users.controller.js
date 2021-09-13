const userCTRL= {}

const User = require('../models/User')

userCTRL.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCTRL.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.josn('Notes Creado');
}

userCTRL.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'Notes Borrado'});
}



module.exports = userCTRL;