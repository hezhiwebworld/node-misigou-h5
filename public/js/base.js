

(function(window){
	
	//jq入口函数
	$(function(){
		
		//a 元素还没有加载，招不到
		$('#nav-box').on('click','a',function(ev){
			if( $(this).data('indexmenu-id') == 7 ){
				//做个判断
				if($(this).hasClass('disabled')){
					$(this).removeClass('disabled');
					$('#nav-box').find('a').each(function(index,value){
						if(index > 7){ $(this).hide();}
					})
				}else{
					$(this).addClass('disabled');
					$('#nav-box').find('a').each(function(index,value){
						if(index > 7){ $(this).show();}
					})
				}
			}
		})
		
	})
	
	//比价点击显示影藏
	$('#bj').on('click','h2',function(ev){
		$(this).parent().find('div.item-box').toggleClass('hide');
	})
	
	
	
	
	
	
	//点击回到顶部
	$(function(){
		$('.footer').find('li').eq(2).on('click',function(){
			var sc=$(window).scrollTop();
	   		$('body,html').animate({scrollTop:0},1000);
		});
	})
	

	
	
	
})(window)
