

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
					console.log(data.category)
					//在这里获取数据，数据渲染完成才能获取宽高
					w = $('#bcj-box1').children().eq(0).width();
					minmove =  -$('#bcj-box1').children().length*w + $('#bcj-box1').parent().width()
					swipermin = minmove;
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
		
		var tap = function(obj,callback){
			var isflag = false;
			var starttime =0;
			obj.on('touchstart',function(ev){
				starttime = Date.now()
			});
			obj.on('touchmove',function(ev){
				isflag = true;
			});
			obj.on('touchend',function(ev){
				if(!isflag && (Date.now()-starttime)<150){
					callback&&callback(ev)
				}
			})
		}
		//移动端点击事件
		tap( $('#bcj-box1') ,function(ev){
			console.log(ev)
			var id = $(ev.target).data('title-id');
			index = id;
			var x = -index*w
			console.log(id)
			 x = x > maxmove ?  maxmove : x ;
		 	 x = x < minmove ? minmove : x ;
			$('#bcj-box1').css({
				transform :' translateX('+ x +'px)',
				transition :'all 1s'
			})
			//记录当前坐标
			currentx = x
			
			$('#bcj-box1').find('a').eq(index).addClass('icur').siblings().removeClass('icur');
		})
		//移动端touch事件
		var startx = 0;
		var movex = 0;
		var distance =0;
		$('#bcj-box1').on('touchstart',function(ev){
			startx = ev.touches[0].clientX;
		})
		$('#bcj-box1').on('touchmove',function(ev){
			movex = ev.touches[0].clientX;
			distance = movex - startx;
			//这里简直坑爹
			x = distance + currentx;
			//console.log(x)
			$('#bcj-box1').css({
				'transform':'translateX('+ x +'px)'
			})
		})
		$('#bcj-box1').on('touchend',function(ev){
			currentx = currentx +distance
			console.log(currentx)
			if(currentx > swipermax){
				currentx = swipermax
			}
			if(currentx < swipermin){
				currentx = swipermin
			}
			
			x = currentx;
			
			$('#bcj-box1').css({
				'transform':'translateX('+ x +'px)'
			})
			
		})
		$('#bcj-box1').on('transitionend',function(){
			$('#bcj-box1').css({
				transition : 'none'
			})
		})
		
	})
})(window)
