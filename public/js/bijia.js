

(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		//渲染比价分类
		getData( baseUrl+'/api/getcategorytitle','',function(res){
			//console.log(res);
			var html = template('tmp',res)
			$('#bj').html(html);
			//等页面渲染完成在获取目标元素
			$('#bj').find('.item').each(function(index,value){
				getcategory(value);
				$(this).find('div').addClass('hide');
			})
		});
		
		//渲染分类
		function getcategory(target){
				//获取自定义属性
				//console.log(target)
				//var id = $(this).attr('data-title-id');
				var id= $(target).attr('data-title-id');
				getData( baseUrl+'/api/getcategory',{titleid : id },function(res){
					console.log(res);
					var html = ''
					$.each(res.result, function() {
						//将目标url带过去
						var targeturl = 'content/list.html?';
						var temp = tools.query({
							categoryid : this.categoryId,
							category : this.category,
							pageid : 1 
						})
						targeturl = targeturl +temp
						
						html += '<li><a href='+targeturl + ' ' + 'data-category-id= '+this.categoryId+'>'+ this.category+'</a></li>';
					});
					//console.log(html)
					$(target).find('ul').html(html)
				});
			
		}
		
		
		
	})
	
})(window)
