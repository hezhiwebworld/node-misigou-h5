


(function(window){
	
	
	var getData = function(url,data,callback){
		//http://127.0.0.1:9090/api/getproductlist?categoryid=0&category=%E7%94%B5%E8%A7%86&pageid=0
		//http://127.0.0.1:9090/api/getproductlist?categoryid=0&?category=%E7%94%B5%E8%A7%86&?pageid=0
		if(data){
			
				
			for (var key in data) {
				url+='?';    //这个
				url+= key;
				url+='=';
				url+=data[key];
				url+="&"
			}
			url = url.substring(0,url.length-1)
			console.log(url)
//			while(url.indexOf('?')){
//				var reg = /\?/g
//				url= url.replace(reg,'');
//			}
			
		}
		console.log(url)
		$.ajax({
			type:"get",
			url:url,
			async:true,
			success : function(res){
				callback&&callback(res)
			}
		});
	}
	
	//暴露接口
	window.getData = getData
	
})(window)
