const express = require('express');
const app = express();
// const data = require('./data');

require('./configuration/express').init(app);
require('./configuration/authentication').init(app);
require('./routes').init(app);


app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen(3000, () => console.log(`App running at :3000`));
