// JavaScript Document

var c=0;
var t;
var r=0;
var u=0;


$(function pp() {
    var leng = $(".pic2 li").length;
    for (i = 0; i < leng; i++) {
        $(".anniu2").append("<li></li>")   
	 $(".anniu2 li").eq(0).addClass('s')
    }
		
	
})
 
$(function oo() {
    $(".anniu2 li").mouseover(function () {
        var id = $(this).index();		    
        
		$(".anniu2 li").removeClass('s')
        $(".anniu2 li").eq(id).addClass('s')
        $(".pic2 li").css("z-index", "80").fadeOut(500);      
        $(".pic2 li").eq(id).css("z-index", "85").fadeIn(500);		
    })
		
})

function ii(){	
    var leng = $(".pic2 li").length;
		r=r+1;	
			if(r>leng-1){r=0;}
		 $(".anniu2 li").removeClass('s')
			$(".anniu2 li").eq(r).addClass('s');
		
			$(".pic2 li").css("z-index", "80").fadeOut(500);
			$(".pic2 li").eq(r).css("z-index", "85").fadeIn(500);
			
			

			
			}
$(function(){
			var ing=setInterval("ii()",4000);
			$(".anniu2 li").hover(function(){
				
				clearInterval(ing);
				},function(){ing=setInterval("ii()",4000);})
			
				})


$(function uu() {
    var leng = $(".pic3 li").length;
    for (i = 0; i < leng; i++) {
        $(".anniu3").append("<li></li>")   
	 $(".anniu3 li").eq(0).addClass('s')
    }
		
	
})
 
$(function yy() {
    $(".anniu3 li").mouseover(function () {
        var id = $(this).index();		    
        
		$(".anniu3 li").removeClass('s')
        $(".anniu3 li").eq(id).addClass('s')
        $(".pic3 li").css("z-index", "80").fadeOut(1000);      
        $(".pic3 li").eq(id).css("z-index", "85").fadeIn(1000);		
    })
		
})

function tt(){	
    var leng = $(".pic3 li").length;
		u=u+1;	
			if(u>leng-1){u=0;}
		 
		 $(".anniu3 li").removeClass('s')
			$(".anniu3 li").eq(u).addClass('s');
			$(".pic3 li").css("z-index", "80").fadeOut(1000);
			$(".pic3 li").eq(r).css("z-index", "85").fadeIn(1000);
			
			

			
			}
$(function(){
			var ingm=setInterval("tt()",3500);
			$(".anniu3 li").hover(function(){
				
				clearInterval(ingm);
				},function(){ingm=setInterval("tt()",3500);})
			
				})








