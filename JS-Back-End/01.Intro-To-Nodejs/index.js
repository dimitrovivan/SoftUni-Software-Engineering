const http = require('http');
const port = 5000;
const handlers = require('./handlers');

function requestHandler(req, res) {
    for (const handler of handlers) {
        if(!handler(req, res)) {
            break;
        }
    }
}

const app = http.createServer(requestHandler);

app.listen(port, () => console.log(`Server listens on port ${port}`));