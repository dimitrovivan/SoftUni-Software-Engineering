const mongoose = require('mongoose');

let accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    imageURL: {
        type: String,
        required: true,
        validate: /^https?/
    }
})

module.exports = mongoose.model('Accessory', accessorySchema);