const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    courses: [
        {
        type: mongoose.Types.ObjectId,
        ref: 'Course'
        }
    ]
})

module.exports = mongoose.model('User', userSchema);