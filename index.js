var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

var server = http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: 'https://squids-awesome-project.firebaseio.com/'
  });
});

console.log("listening on port 5050")
server.listen(5050);