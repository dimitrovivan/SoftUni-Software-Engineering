const mongoose = require('mongoose');

let courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema);