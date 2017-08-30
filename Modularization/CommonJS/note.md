//add.js
```
module.exports = function add(a,b) {
	return a + b;
}
```

var add = require('./add')..

它是同步的，浏览器除了加载该文件，什么事情也做不了。
提出了异步模块AMD