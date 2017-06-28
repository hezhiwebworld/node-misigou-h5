

(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		var arr = ['views/bijia.html','views/sqk.html',
		'views/gnzk.html','views/bcj.html','views/sqk.html',
		'views/discount.html','#','javascript:;','views/sum.html',
		'#','views/nav.html','views/nameplate.html',
		]
		//渲染首页导航
		getData( baseUrl+'/api/getindexmenu','',function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#nav-box').html(html);
			//手动给a标签添加链接
			$('#nav-box').find('a').each(function(index,value){
				if(index > 7 ){
					$(this).hide()
				}
				$(this).attr('href',arr[index])
			})
		});
		//渲染第一列表
		getData( baseUrl+'/api/getmoneyctrl','',function(res){
			console.log(res)
			var html = template('tmp1',res)
			$('#home-count-box').html(html);
			//设置分页样式
			var target = $('.pagination');
			var page = res.pagesize;
			var pages = res.totalCount;
			
			setpage(target,page,pages);
		});
		
		//点击上一页下一页切换
		var num = 0;
		$('.pagination').on('click','a',function(ev){
		num++;
		//设置当前页
		$('.pagination').attr('current-page-id',num)
		
		var data = {
			pageid : num
		}
		getData( baseUrl+'/api/getmoneyctrl',data,function(res){
			console.log(res)
			var html = template('tmp1',res)
			$('#home-count-box').html(html);
			//设置分页样式
			var target = $('.pagination');
			var page = res.pagesize;
			var pages = res.totalCount;
			setpage(target,page,pages);
			//点击切换
		});	 
	})
		
		
		
	})
	
})(window)
