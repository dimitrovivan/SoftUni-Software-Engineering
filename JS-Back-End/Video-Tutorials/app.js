const express = require('express');
const { PORT } = require('./config/config');

const router = require('./router');
const app = express();

require('./config/express')(app);

app.use(router);

app.listen(PORT, console.log.bind(console, `Server is listenning on port ${PORT}`))