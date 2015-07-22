// JavaScript Document

$(function(){var i=0;
$(".next").click(function(){
	leng=$(".team li").length;
	
	if(i<leng/4-1){
	i++;
	
	$(".team").animate({"margin-left":"-"+(($(".team li").width()+12)*4*i)},300)

	}
	})
	$(".prev").click(function(){
	leng=$(	".team li").length;
	
	if(i>0)
	{i--;

	$(".team").animate({"margin-left":"-"+(($(".team li").width()+12)*4*i)},300)
	
	}
	})
	
	
})
