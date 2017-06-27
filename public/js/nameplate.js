







(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		//渲染列表标题
		getData( baseUrl+'/api/getbrandtitle','',function(res){
			console.log(res)
			var html = template('tmp1',res);
			$('#name-box').html(html);
			getbrand();
		});
		//渲染列表内容
		
		function getbrand(){
			
			$('#name-box').find('h2').on('click',function(){
				var that = this;
				var id  = $(this).data('brandtitle-id');
				var data = {
					brandtitleid : id
				}
				getData( baseUrl+'/api/getbrand',data,function(res){
					console.log(res)
					
					var arr = res.result;
					var html =""
					$.each(arr, function(index,value) {
						
						html += '<li><a href="#">'+this.brandName+'</a></li>'
						console.log(html)
					});
					
					$(that).siblings('div').find('.list').html(html);
				});
			});
			
		}
		
	})
	
})(window)
