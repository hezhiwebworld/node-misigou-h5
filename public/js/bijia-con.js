
(function(window){
	
	//	http://127.0.0.1:9090/api/getproduct?productid=3
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	$(function(){
		
		//渲染内容页
		var data = tools.unquery(location.search);
		console.log(data)
		//渲染图片
		getData( baseUrl+'/api/getproduct',data,function(res){
			console.log(res)
			var html = template('tmp',res)
			
			$('.con-box').html(html)
			console.log(data.category)
			//这里需要转码一下
			//$('#category').html(decodeURI(data.category))
		});
		//渲染评论
		getData( baseUrl+'/api/getproductcom',data,function(res){
			console.log(res)
			var html = template('tmp1',res)
			
			
			$('.com-box').html( html );
			//这里需要转码一下
			//$('#category').html(decodeURI(data.category))
		});
		
	})
	
	
})(window)
