function moveTop(){	
  var currentPos = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if(currentPos<=0){return false;}
  var timer = setInterval(function(){
    targetPos = parseInt(currentPos /1.1) ;
    targetPos<2 && (targetPos=0);
		document.body.scrollTop = targetPos;
		document.documentElement.scrollTop = targetPos;
		window.pageYOffset = targetPos;
    currentPos = targetPos;
    if(targetPos<2){
      clearInterval(timer);
    }
  },15);
}

$(function () {
    $(window).scroll(function(){ 
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			var screenWidth = document.documentElement.clientWidth || window.clientWidth || document.body.clientWidth;
        if(screenWidth>1200 && scrollTop>300){
					$('#navbar').addClass("scrolled");
					$(".move-top").addClass("scrolled");
		    }else{
					$('#navbar').removeClass("scrolled");
					$(".move-top").removeClass("scrolled");
		    }
	  }); 
	
	$(".cnLang").click(function(){
		window.localStorage.setItem("beneLang","cn")		
	});

	$(".enLang").click(function(){
		window.localStorage.setItem("beneLang","en")		
	});
	
	$("input").blur(function(event){
		event = event?event:window.event;      
		if(event.target.value && event.target.value.length>0){
			$(event.target.parentNode).addClass("inputed");
		}else{
			$(event.target.parentNode).removeClass("inputed");
		}
		$(".move-top").addClass("scrolled");
	});

	$("input").focus(function(){      
		$(".move-top").removeClass("scrolled");
	});
  

	/*当按下退格键后退回上次浏览页面 */
	$("body").keydown(function(e){
		/*backspace*/		
		if(e.keyCode === 8 && e.target.tagName!="INPUT" && e.target.tagName!="TEXTAREA"){
			history.back();
		}
		/*escape */
		if(e.keyCode === 27){
			$(".news-dialog").addClass("fade");
			setTimeout(function(){$(".news-dialog").addClass("hide");},600)
		}
	})
	
});

var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d92d1b2d437abbf020e7b5574c8f846f";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  

