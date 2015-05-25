var proxy=require("../lib/proxy").proxy;
var ppp=new proxy()
var options = {
	host: 'www.baidu.com',
	method: 'get',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		//'Content-Length': contents.length
	}
};
ppp.get(options,"wd=connect",function (res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
});