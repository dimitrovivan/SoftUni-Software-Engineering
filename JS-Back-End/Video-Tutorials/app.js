const express = require('express');
const { PORT } = require('./config/config');

const app = express();

app.listen(PORT, console.log.bind(console, `Server is listenning on port ${PORT}`))