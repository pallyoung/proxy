(function(){
	var http=require("http");
	var https=require("https");
	var url=require("url");
	var util=require("util");
	var method={
		wrapOptions:function(options,method){
			var oOptions=typeof options=="string"?options=url.parse(options):options;
			if(oOptions.protocol==null){
				oOptions.protocol="http:";
			};
			if(method){
				oOptions.method=method;
			};
			if(oOptions.method==null){
				oOptions.method="GET";
			};
			return oOptions;
		},
		send:function(options,content,callback){
			var protocol=options.protocol=="https"?https:http;
			var request=null;
			if(content==""){
				request=protocol.get(options,callback);
			}else{
				request=protocol.request(options,callback);
				request.write(content);
				request.end();
			}
			
		}
	}
	proxy={
		get:function(options,callback){
			var opt=method.wrapOptions(options,"GET");
			method.send(opt,"",callback);
			
		},
		post:function(options,content,callback){
			var opt=method.wrapOptions(options,"POST");
			method.send(opt,content,callback);

		},
		request:function(options,content,callback){
			var opt=method.wrapOptions(options);
			method.send(opt,content,callback);
		}

	};
	module.exports={
		proxy:proxy

	}
})()