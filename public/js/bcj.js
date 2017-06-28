

(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	//公用变量index
	var index =0;
	//每个a标签的宽度
	var w = 0;
	//点击最大移动范围
	var maxmove = 0;
	var minmove = 0;
	//记录目标移动的位置
	var currentx = 0;
	//拖动的最大距离----偷个懒，就不计算了
	var swipermax = 0;
	var swipermin = 0;
	
	$(function(){
		
		//渲染列表页
		
		getData( baseUrl+'/api/getbaicaijiatitle','',function(res){
			//console.log(res)
			var html = template('tmp',res)
			$('#bcj-box1').html(html);
			//初始化数据
			var data = {
				titleid : 0
			}
			getData( baseUrl+'/api/getbaicaijiaproduct',data,function(res){
			 		console.log(res)
			 		var html = template('tmp1',res)
					$('#bcj-box2').html(html)
					//console.log(data.category)
					//在这里获取数据，数据渲染完成才能获取宽高
					w = $('#bcj-box1').children().eq(0).width();
					maxmove =  $('#bcj-box1').children().length*w - $('#bcj-box1').parent().width()
					swipermin = -maxmove;
			})
			//绑定事件
			getbaicaijiaproduct()
		});
		
		
		
		function getbaicaijiaproduct(){
			 $('#bcj-box1').on('click',function(ev){
			 	//天才想法之-----a和i都加上自定义属性
			 	var id = $(ev.target).data('title-id');
			 	var data = {titleid : id }
			 	//根据请求渲染数据
			 	getData( baseUrl+'/api/getbaicaijiaproduct',data,function(res){
			 		console.log(res)
			 		var html = template('tmp1',res)
					$('#bcj-box2').html(html)
					//console.log(data.category)
			 	});
			 })
		}
		
	})
	
	//白菜价首页滑动导航
	$(function(){
		var startx,movex,distance;
		
		$('#bcj-box1').on('touchstart',function(ev){
			startx = ev.targetTouches[0].clientX;
			//console.log(ev.targetTouches[0].clientX)
		});
		$('#bcj-box1').on('touchmove',function(ev){
			movex = ev.targetTouches[0].clientX
			distance =  movex - startx;
			x = currentx + distance;
			
			if( x > swipermax){
				x = swipermax
			}
			if( x > swipermin){
				x = swipermin
			}
			
			$('#bcj-box1').css({
				transform : 'translateX('+ x +'px)'
			})
			console.log(distance)
		});
		$('#bcj-box1').on('touchend',function(ev){
			
			currentx = currentx+ distance;
			
			if(currentx>maxmove){
				currentx =maxmove;
			}
			if(currentx <minmove){
				currentx =minmove;
			}
			//数据清空
			startx =0;
			movex = 0;
			distance =0;
		});
	})
	
	//首页点击事件
	$(function(){
		$('#bcj-box1').on('click' , 'a' ,function(){
			
			$(this).addClass('icur').siblings().removeClass('icur');
			console.log(maxmove)
			
			index = $(this).index();
			var  x =  - index*w
			
			if( Math.abs(x)> maxmove ){
				x = -maxmove;
			}
			currentx = x;
			$('#bcj-box1').css({
				transform :'translateX('+ x +'px)',
				transition : "all 1s"
			})
		})
	})
	
})(window)
