jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});

(function(){
	var src= [
		'https://kainy.cn/js/common.js'
	];
	for(var i= src.length; i> 0; i--){
		var c = document.createElement('script'); 
		c.type = 'text/javascript';
		c.defer = true;
		c.src = src[i-1];
		var h = document.getElementsByTagName('script')[0];
		h.parentNode.insertBefore(c, h);
	}
})();