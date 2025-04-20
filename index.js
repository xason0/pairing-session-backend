const express = require('express');
const app = express();
const _path = process.cwd();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

// Serve static files
app.use('/assets', express.static(__dirname + '/assets'));

let code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;

app.use('/code', code);
app.use('/pair', async (req, res, next) => {
  res.sendFile(_path + '/pair.html');
});
app.use('/', async (req, res, next) => {
  res.sendFile(_path + '/main.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server is running! Powered by Xason XtarmD');
});

module.exports = app;
