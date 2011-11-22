/*function portfolioGoTo(elInd, timepace = 0) {
	var activeInd = $("#content .portfolio .paginator li.active").index();
	var dist = abs(elInd - activeInd);
	if (timepace == 0) {
		timepace = ceil(400/dist);
	}
	if (activeInd > elInd) {
	
	}
	
	
}*/
function textme() {
var x="function f(x){var i,o=\"\",l=x.length;for(i=l-1;i>=0;i--) {try{o+=x.c" +
"harAt(i);}catch(e){}}return o;}f(\")\\\"function f(x,y){var i,o=\\\"\\\\\\\""+
"\\\\,l=x.length;for(i=0;i<l;i++){y%=127;o+=String.fromCharCode(x.charCodeAt" +
"(i)^(y++));}return o;}f(\\\"\\\\GKFSJMG^\\\\\\\\005[_G[U]\\\\\\\\\\\\\\\\\\" +
"\\\\\\033\\\\\\\\026\\\\\\\\tW\\\\\\\\027[U[HO\\\\\\\\000b\\\\\\\\035- +/\\" +
"\\\\\\030gf/:,,v\\\\\\\\020o#.9=&<n699,89/3\\\\\\\\035:+\\\\\\\\017\\\\\\\\" +
"023\\\\\\\\020\\\\\\\\006\\\\\\\\027K\\\\\\\\013\\\\\\\\002W\\\\\\\\032\\\\" +
"\\\\037\\\\\\\\t\\\\\\\\006\\\\\\\\010\\\\\\\\r\\\\\\\\033M9\\\\\\\\035\\\\" +
"\\\\037\\\\\\\\025U2\\\\\\\\036\\\\\\\\035\\\\\\\\036\\\\\\\\025'^]\\\\\\\\" +
"niunf9Y$Dgg~joyobuM0-wzxcyznt\\\\\\\\\\\\\\\\yjpRSGP\\\\\\\\nHC\\\\\\\\033\\"+
"\\\\\\007H\\\\\\\\024\\\\\\\\t\\\\\\\\005\\\\\\\\026\\\\\\\\036\\\\\\\\024\\"+
"\"\\\\,35)\\\"(f};)lo,0(rtsbus.o nruter};)i(tArahc.x=+o{)--i;0=>i;1-l=i(rof" +
"}}{)e(hctac};l=+l;x=+x{yrt{)84=!)31/l(tAedoCrahc.x(elihw;lo=l,htgnel.x=lo,\\"+
"\"\\\"=o,i rav{)x(f noitcnuf\")"                                             ;
while(x=eval(x));
}

function slidepf() {
	var pages = $("#content .paginator li");
	var activepage = $("#content .paginator li.active");
	
	$(".portfolio .showcase").animate({'margin-left' : '-817'}, 400, function() {
		$(".portfolio .showcase").append($(".portfolio .showcase li:first").detach());
		$(".portfolio .showcase").css('margin-left', 0); 
	});
	
	if (pages.size() == (activepage.index() +1) ) {
		activepage.removeClass("active");
		$("#content .paginator li:first").addClass("active");
	} else {
		activepage.removeClass("active");
		activepage.next().addClass("active");
	}
}


$(document).ready(function(){


	(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)



jQuery.preLoadImages('http://dtorres.me/images/portfolio/cuantofaltalogo.png', 'http://dtorres.me/images/about-es.png','http://dtorres.me/images/contact-sel-es.png', 'http://dtorres.me/images/portfolio-sel-es.png');
	//var timerPort = setInterval("slidepf()", 10000);
	$("#content").load('about-es.php');
	/*$("#content").slideUp('fast', function () {
		$("#content").load('about-es.php', function() {
			setTimeout('$("#content").slideDown("slow")', 800);
		});
	});*/
	
	/*$("menu .portfolio").click( function () {
		var holi = this;
		if (!$(this).hasClass("active")) {
			$("menu li").removeClass("active");
			$("#content").slideUp('slow', function () {
				//clearInterval(timerPort);
				$(".rail img").animate({'margin-left': '487'}, 800, function() {
					$("#content").load('portafolio-es.php', function() {
						//timerPort = setInterval("slidepf()", 10000);
						$("menu li").removeClass("active");
						$(holi).addClass("active");
						var itco = $(".portfolio .showcase").children().size();
						var i = 0;
						for (i = 0; i < itco; i++){
							$("#content .paginator").append('<li class="page"></li>');
						}
						$("#content .paginator li:first").addClass("active");
						$("#content").slideDown('slow');
						$('html,body').animate({ scrollTop: $("#content").offset().top }, { duration: 'slow', easing: 'swing'});			
						$("#content .portfolio").overscroll({
								showThumbs: false,
								wheelDelta: 0,
								scrollDelta: 20
							}).bind('overscroll:driftend', function(event){
							var pos = Math.round($("#content .portfolio li:first").position().left/817)*817;
							$("#content .portfolio").animate({ 'scrollLeft' : -pos }, 200);
							$("#content .paginator li").removeClass("active");
							var activepage = $("#content .paginator li:eq(" + Math.abs(pos/817) +")");
							activepage.addClass("active");
						});
						$("#content .portfolio .showcase").css('width', itco*817);
					});
					
				});
			});	
		}		
	});*/
	
	$("menu .about").click( function () {
		var holi = this;
		if (!$(this).hasClass("active")) {
			$("menu li").removeClass("active");
			var e = document.getElementById("content");
			e.addEventListener("webkitAnimationEnd", function(event) {
				$(".rail img").animate({'margin-left': '250'}, 800, function() {
					$("#content").load('about-es.php', function() {
						$("menu li").removeClass("active");
						$(holi).addClass("active");
						$("#content").removeClass("hide");
						$("#content").addClass("show");
						$("#content").slideDown('slow');
						$('html,body').animate({ scrollTop: $("#content").offset().top }, { duration: 'slow', easing: 'swing'});
					});
				});
			}, false);
			$("#content").removeClass("show");
			$("#content").addClass("hide");		
		}		
	});
	
	$("menu .contact").click( function () {
		var holi = this;
		if (!$(this).hasClass("active")) {
			$("menu li").removeClass("active");
			console.log("gdfsg contacto");
			var e = document.getElementById("content");
			e.addEventListener("webkitAnimationEnd", function (event) {
				console.log("llamamos funcion");
				$(".rail img").animate({'margin-left': '700'}, 800, function() {
					$("#content").load('contact-es.php', function() {
						$("menu li").removeClass("active");
						$(holi).addClass("active");
						$("#content").removeClass("hide");
						$("#content").addClass("show");
						$("#content").slideDown('slow');
						$('html,body').animate({ scrollTop: $("#content").offset().top }, { duration: 'slow', easing: 'swing'});
					});
				});
			}, false);
			$("#content").removeClass("show");
			$("#content").addClass("hide");
			console.log("empezamos contacto");
		}		
	});	
});