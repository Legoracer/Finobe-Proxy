var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
	console.log(
		"ssss: " + proxyReq.getHeader('X-HTTP-Method-Override')
	)
	proxyReq.setHeader('X-HTTP-Method-Override', 'PUT');
});

var server = http.createServer(function(req, res) {
	proxy.web(req, res, {
		changeOrigin: true,
		target: 'https://squids-awesome-project.firebaseio.com/'
	});
});

console.log("listening on port 5050")
server.listen(process.env.PORT);