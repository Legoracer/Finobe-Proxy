var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
	console.log(proxyReq.method)
	proxyReq.setHeader('X-HTTP-Method-Override', 'PUT');
});

var server = http.createServer(function(req, res) {
	console.log("??????????????????????????")
	proxy.web(req, res, {
		changeOrigin: true,
		target: 'https://squids-awesome-project.firebaseio.com/'
	});
});

console.log("listening on port 5050")
server.listen(process.env.PORT || 5050);