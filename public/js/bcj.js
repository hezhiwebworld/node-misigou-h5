

(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
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
	
})(window)
