


(function(window){
	
	//	http://127.0.0.1:9090/api/getproduct?productid=3
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	$(function(){
		
		//渲染内容页
		var data = tools.unquery(location.search);
		console.log(data)
		//渲染图片
		getData( baseUrl+'/api/getmoneyctrlproduct',data,function(res){
			console.log(res)
			var html = template('tmp',res)
			
			$('#sqk-box').html(html);
			
			$('#comment').html(res.result[0].productComment)
		});
		
		
		
	})
	
	
})(window)
