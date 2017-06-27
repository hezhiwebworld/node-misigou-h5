



(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		
		//渲染列表页
		
		getData( baseUrl+'/api/getinlanddiscount','',function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#gnzk-box').html(html)
			//console.log(data.category)
			//这里需要转码一下  ===列表导航
			//取出数组
			var arr = res.result;
			$.each(arr, function(index,value) {
				
				var url = 'gnzk-con.html?'
				 url += tools.query({productid : this.productId})
				console.log(url)
				
				$('#gnzk-box').find('a').eq(index).attr('href',url)
			});
			
		});
	})
	
})(window)
