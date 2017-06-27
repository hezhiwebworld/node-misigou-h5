


(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		
		//渲染列表页
		
		getData( baseUrl+'/api/getcoupon','',function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#discount-box').html(html)
//			//console.log(data.category)
//			//这里需要转码一下  ===列表导航
//			//取出数组
			var arr = res.result;
			$.each(arr, function(index,value) {
				
				var url = 'discount-list.html?'
				 url += tools.query({couponid : this.couponId})
				console.log(url)
				
				$('#discount-box').find('a').eq(index).attr('href',url)
			});
			
		});
	})
	
})(window)

