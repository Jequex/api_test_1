const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Users = mongoose.model('user', UsersSchema);

module.exports = Users;