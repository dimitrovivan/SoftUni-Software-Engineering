module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/video-tutorials', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', console.error.bind(console, 'DB connected'));
}