







(function(window){
		//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	
	$(function(){
		//渲染商店
		getData( baseUrl+'/api/getsitenav','',function(res){
			console.log(res)
			var html = template('tmp1',res)
			$('#nav-box').html(html)
			
		});
		//渲染地区
		
	})
	
})(window)
