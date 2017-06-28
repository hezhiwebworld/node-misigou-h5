







(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		//渲染列表标题
		getData( baseUrl+'/api/getbrandtitle','',function(res){
			console.log(res)
			var html = template('tmp1',res);
			$('#name-box').html(html);
			
			$('#name-box').find('h2').each(function(index,value){
				 getbrand(value)
			})
		});
		//渲染列表内容
		
		function getbrand(target){
			
			
			
				var id  = $(target).data('brandtitle-id');
				var data = {
					brandtitleid : id
				}
				getData( baseUrl+'/api/getbrand',data,function(res){
					console.log(res)
					
					var arr = res.result;
					var html =""
					//拼接字符串
					var url = "nameplate-con.html?" + tools.query(data)
					$.each(arr, function(index,value) {
						
						html += '<li><a href='+url+'>'+this.brandName+'</a></li>'
						//console.log(html)
					});
					
					$(target).siblings('div').find('.list').html(html);
				});
			
			
		}
		
	})
	
	$(function(){
		$('#name-box').on('click','h2',function(){
			$(this).parent().find('.item-box').toggleClass('hide');
		})
	})
	
	
})(window)
