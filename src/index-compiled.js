'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _arrowFunctions = require('./arrowFunctions');

var _arrowFunctions2 = _interopRequireDefault(_arrowFunctions);

var _lexicalScoping = require('./lexicalScoping');

var _lexicalScoping2 = _interopRequireDefault(_lexicalScoping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

//# sourceMappingURL=index-compiled.js.map