const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
//Register Schema

const UserSchema = mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByEmail= (email, callback) => {
    const query = {email: email}
    User.findOne(query, callback);
}

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};



//bcryptjs

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(15, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)  => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}