const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/express')(app);

app.listen(config.PORT, () => console.log(`Server listenning on port ${config.PORT}`));
