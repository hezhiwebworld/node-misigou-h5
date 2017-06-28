



(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	//获取单个li的宽度
	var w =0;
	//当前图片的缩影值
	var index =0;
	//列表的长度
	var len =0;
	$(function(){
		
		//渲染列表页
		var data = tools.unquery(location.search);
		
		getData( baseUrl+'/api/getcouponproduct',data,function(res){
			console.log(res)
			var html = template('tmp',res)
			$('#discount-box').html(html)
			
			var html1 = template('tmp1',res);
			$('#discount-box1').html(html1)
			//数据渲染完成后，获取耽搁li的宽度
			w = $('#discount-box1').find('li').eq(0).width();
			//获取列表的长度
			len = $('#discount-box1').find('li').length;
		});
		
		
	})
	
	//提示信息延迟5秒自动隐藏
	$(function(){
		//$('.food-tip').delay(1000).slideUp(2000);
	})
	//点击优惠券形成遮罩层轮播图
	$(function(){
		$('.mark-left').on('click',function(){
			index--
			if(index<=0){
				index =0
			}
			var x = -index*w
			console.log(x)
			$('#discount-box1').css({
				transform : 'translateX('+ x +'px)',
				transition : "all 1s"
			});
		});
		$('.mark-right').on('click',function(){
			index++
			if(index>=len-1){
				index =len-1
			}
			var x = -index*w
			$('#discount-box1').css({
				transform : 'translateX('+ x +'px)',
				transition : "all 1s"
			});
		})
	})
	
	//注册点击事件
	$(function(){
		$('#discount-box').on('click','.item',function(){
			
			//点击渲染
			var data = tools.unquery(location.search);
		
			getData( baseUrl+'/api/getcouponproduct',data,function(res){
				console.log(res)
				var html1 = template('tmp1',res);
				$('#discount-box1').html(html1)
				//数据渲染完成后，获取耽搁li的宽度
				w = $('#discount-box1').find('li').eq(0).width();
				//获取列表的长度
				len = $('#discount-box1').find('li').length;
			});
			
			$('.layer').toggleClass('hide')
		})
	})
	
})(window)
