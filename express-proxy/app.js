var express = require('express')
var proxy = require('http-proxy-middleware')
var app = express()

app.use('/api', proxy({
	target: 'http://fm.test.fang.com/bit/List.do',
	changeOrigin: true,
	pathRewrite: {
		'^/api': ''
	}
}))
//target 为本地IIS环境中的application action，此处可替换为某不允许跨域请求的后端url
app.use(express.static('dist'))

app.get('*', function(req,res) {
	res.sendfile('./dist/index.html')
})
var port = 8077;
app.listen(port, function() {
	console.log('listen at: ' + port);
	console.log('conneted success');
})