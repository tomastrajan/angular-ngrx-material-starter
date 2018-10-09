const express = require('express');
const app = express();
app.use('/angular-ngrx-material-starter', express.static(__dirname + '/dist'));
app.use('/', express.static(__dirname + '/dist'));
app.listen(4000);
