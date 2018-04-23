const express = require('express');
const app = express();
const data = require('./data');

require('./configuration/express').init(app, data);
// require('./ro/authentication').init(app, data);
// require('./configuration/jwt-strategy').init(app, data);

require('./routes').init(app, data);


app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen(8000, () => console.log(`App running at :8000`));
