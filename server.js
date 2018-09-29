const express = require('express');
const compression = require('compression');

const CONTEXT = '/angular-ngrx-material-starter';
const PORT = 4000;

const app = express();

app.use(compression());
app.use(CONTEXT, express.static(__dirname + '/dist'));
app.use('/', express.static(__dirname + '/dist'));
app.listen(PORT, () => console.log(`App running on localhost:${PORT}/${CONTEXT}`));
