



(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		
		//渲染列表页
		var data = tools.unquery(location.search);
		console.log(data)
		getData( baseUrl+'/api/getproductlist',data,function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#list-box').html(html)
			//设置分页结构
			
			var target = $('.pagination');
			var page = res.pagesize;
			var pages = res.totalCount;
			setpage(target,page,pages);
			//将分类id绑定在page容器上
			$('.page').attr('category-id', res.result[0].categoryId );
			//这里需要转码一下  ===列表导航
			$('#category').html(decodeURI(data.category));
			var targeturl = 'content.html?';
			$.each(res.result,function(index,value){
				var url = tools.query({
					productid : this.productId
				})
				
				var url = targeturl + url
				console.log(url)
				
				$('#list-box').find('a').eq(index).attr('href',url)
			})
			
		});
		
		
	})
	
	//点击上一页下一页切换
	
	$(function(){
		var num = 1;
		$('.pagination').on('click','a',function(ev){
			num++;
			//设置当前页
			$('.pagination').attr('current-page-id',num)
			var cateid = $('.page').attr('category-id');
			
			
			//这里还是两个参数的问题
			var data = {
				categoryid : cateid ,
				pageid : num
			}
			console.log( cateid , num)
			getData( baseUrl+'/api/getproductlist',data,function(res){
				
				//console.log(res)
				var html = template('tmp',res)
				$('#list-box').html(html)
				//设置分页样式
				var target = $('.pagination');
				var page = res.pagesize;
				var pages = res.totalCount;
				setpage(target,page,pages);
				//点击切换
				var targeturl = 'content.html?';
				$.each(res.result,function(index,value){
					var url = tools.query({
						productid : this.productId
					})
					
					var url = targeturl + url
					console.log(url)
					
					$('#list-box').find('a').eq(index).attr('href',url)
				})
				
				
			});	
		});	
	})
	
	
	
})(window)
