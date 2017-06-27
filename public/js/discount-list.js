



(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		
		//渲染列表页
		var data = tools.unquery(location.search);
		
		getData( baseUrl+'/api/getcouponproduct',data,function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#discount-box').html(html)
		});
		
		
	})
	
})(window)
