
(function(window){
	
	//设置基础url
	var baseUrl = 'http://127.0.0.1:9090';
	
	$(function(){
		//渲染商品内容详情
		getData( baseUrl+'/api/getmoneyctrlproduct',{"productid" : 20},function(res){
			//console.log(res)
		});
	})
	
})(window)
