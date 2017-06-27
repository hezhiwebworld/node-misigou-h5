



(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		
		//渲染列表页
		var data = tools.unquery(location.search);
		
		getData( baseUrl+'/api/getproductlist',data,function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#list-box').html(html)
			//console.log(data.category)
			//这里需要转码一下  ===列表导航
			$('#category').html(decodeURI(data.category));
			var targeturl = 'content.html?';
			$.each(res.result,function(index,value){
				//拼接字符串
//				console.log( tools.query({
//					productId : this.productId,
//					productListId :this.productListId,
//					brandId :this.brandId
//				}) )

				var url = tools.query({
					productid : this.productId
				})
				
				var url = targeturl + url
				console.log(url)
				
				$('#list-box').find('a').eq(index).attr('href',url)
			})
			
		});
		
		
	})
	
})(window)
