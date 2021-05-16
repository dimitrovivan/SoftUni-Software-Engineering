const http = require('http');
const port = 5000;

function requestHandler(request, response) {
    response.write('Hello');
    response.end();
}

const app = http.createServer(requestHandler);

app.listen(port, () => console.log(`Server listens on port ${port}`));