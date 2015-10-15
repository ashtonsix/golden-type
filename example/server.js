/* eslint no-var:0 */

var path = require('path');

require('express')().get('/bundle.js', function bundle(req, res) {
  res.sendFile(path.join(__dirname, '/bundle.js'));
}).get('/', function index(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
}).listen(3000, 'localhost', function start() {
  console.log('Listening at http://localhost:3000');
});
