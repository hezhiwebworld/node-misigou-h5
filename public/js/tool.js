

(function(window){
	
	var tools = {
		//将参数拼接到url
		query : function(obj){
			var url = '';
			for (var key in obj) {
				url+= key;
				url+='=';
				url+=obj[key];
				url+="&"
			}
			url = url.substring(0,url.length-1);
			return url;
		},
		unquery : function(url){
			var str = url;
			var arr = str.substring(1).split('&');
			var obj ={}
			for (var i = 0 ; i < arr.length ; i++) {
				var temp = arr[i].split('=')
				obj[temp[0]] = temp[1]
			}
			return obj;
		}
		
	}
	
	window.tools = tools;
	
})(window)
