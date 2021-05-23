const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const routes = require('./routes');
const app = express();

expressConfig(app);

app.use(routes);

const PORT = config.PORT;

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));