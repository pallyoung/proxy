var http = require('http');
var querystring = require('querystring');
var url=require("url");
var util=require("util");
// var contents = querystring.stringify({
// 	name: 'byvoid',
// 	email: 'byvoid@byvoid.com',
// 	address: 'Zijing 2#, Tsinghua University',
// });
// var options = {
// 	host: 'www.baidu.com',
// 	method: 'get',
// 	headers: {
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 		//'Content-Length': contents.length
// 	}
// };
// var req = http.request("http://www.baidu.com", function(res) {
// 	res.setEncoding('utf8');
// 	res.on('data', function(data) {
// 		console.log(data);
// 	});
// });
// req.write("");
// req.end();
console.log(util.inspect(url.parse("www.baidu.com")));