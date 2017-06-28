





(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		//渲染商店
		getData( baseUrl+'/api/getgsshop','',function(res){
			console.log(res)
			var html = template('tmp1',res)
			$('#shop-list1').html(html)
			
		});
		//渲染地区
		getData( baseUrl+'/api/getgsshoparea','',function(res){
			console.log(res)
			var html = template('tmp2',res)
			$('#shop-list2').html(html)
			
			
		});
		
		//渲染列表页
		var data ={
			shopid : 1,
			areaid : 1
		}
		getData( baseUrl+'/api/getgsproduct',data,function(res){
			console.log(res)
			var html = template('tmp3',res)
			$('#sum-box').html(html)
			
			
		});
	})
	
	//导航条二级菜单特效
	$(function(){
		$('.nav-box').on('click','li',function(){
			var index = $(this).index();
			var target = $('#sum-box1').find('ul').eq(index);
			target.hide().siblings().hide();
			target.show()
		})
		
		$('#shop-list1').on('click','li',function(){
			var name = $(this).data('shop-name');
			$('.shop').html(name)
			$('#shop-list1').hide();
		})
		
		$('#shop-list2').on('click','li',function(){
			var name = $(this).data('area-name');
			$('.area').html(name)
			$('#shop-list2').hide();
		})
		
	
		
	})
	
	
})(window)
