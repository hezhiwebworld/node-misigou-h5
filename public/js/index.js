

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
				$(this).attr('href',arr[index])
			})
		});
		//渲染列表
		getData( baseUrl+'/api/getmoneyctrl','',function(res){
			//console.log(res)
			var html = template('tmp1',res)
			$('#home-count-box').html(html);
			
		});
		
		//渲染商品详情页
		getData( baseUrl+'/api/getmoneyctrlproduct',{"productid" : 20},function(res){
			//console.log(res)
		});
		
		//渲染比价分类
		
		getData( baseUrl+'/api/getcategorytitle','',function(res){
			console.log(res)
		});
		
	})
	
})(window)
