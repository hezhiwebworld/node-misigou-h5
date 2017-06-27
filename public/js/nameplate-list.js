







(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		//渲染列表标题
		var data = {
			brandtitleid : 0
		}
		getData( baseUrl+'/api/getbrand',data,function(res){
			console.log(res)
			var html = template('tmp1',res);
			$('#name-box1').html(html);
			
		});
		//渲染列表内容
		var data = {
			brandtitleid : 0
		};
		getData( baseUrl+'/api/getbrandproductlist',data,function(res){
			console.log(res)
			var html = template('tmp2',res);
			$('#name-box2').html(html);
			
		});
		
		var data = {
			productid : 0
		};
		getData( baseUrl+'/api/getproductcom',data,function(res){
			console.log(res)
			var html = template('tmp3',res);
			$('#name-box3').html(html);
			
		});
		
	})
	
})(window)
