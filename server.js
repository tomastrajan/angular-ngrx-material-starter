const express = require('express');
const compression = require('compression');

const CONTEXT = `/${process.env.CONTEXT || 'angular-ngrx-material-starter'}`;
const PORT = process.env.PORT || 4000;

const app = express();

app.use(compression());
app.use(CONTEXT, express.static(__dirname + '/dist'));
app.use('/', express.static(__dirname + '/dist'));
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}${CONTEXT}`));
