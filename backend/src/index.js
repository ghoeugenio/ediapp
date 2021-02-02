const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    return response.json({ hello: 'world' });
});

app.listen(3333);