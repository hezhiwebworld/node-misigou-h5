
//设置html元素的字体大小
(function(doc,win){
	var docE = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientionchange' : 'resize',
		recalc = function(){
			var cW = docE.clientWidth;
			if(!cW){
				return;
			}
			docE.style.fontSize = 20 * (cW / 320 ) + 'px';
		}
	if(!doc.addEventListener){
		return;
	}else{
		win.addEventListener( resizeEvt , recalc ,false);
		doc.addEventListener( 'DOMContentLoaded' , recalc , false )
	}
	
})(document,window)
