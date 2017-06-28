

(function(window){
	
	var baseUrl = 'http://127.0.0.1:9090';
	
	function setpage(target,page,pages){
		var num = Math.ceil(pages/page);
		
			var html ='<li><a href="#" aria-label="Previous" class="prev"><span aria-hidden="true">&laquo;</span></a></li>';
			for (var i=0 ; i<num ; i++) {
				if(i<5){
					html +=' <li><a href="#">'+ (i + 1 )+'</a></li>'
				}
			}
			 html +='<li><a href="#" aria-label="Next" class="next"><span aria-hidden="true">&raquo;</span></a></li>'
		
		target.html(html);
	}
	//暴露接口
	window.setpage = setpage;
})(window)
