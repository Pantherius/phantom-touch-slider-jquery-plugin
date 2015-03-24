/***********************************************************

 Filename: phantom.slider.js
 Title: Phantom Touch Slider  - jQuery File
 Description: Custom Javascript / jQuery file
 Author: Pantherius
 Author Page: http://codecanyon.net/user/pantherius
 Website: http://pantherius.com

************************************************************/


(function( jQuery ){
	var left, right;
    var methods = {
    init : function(options) {
	var defaults = { 
		width:						'100%',
		height:						'100%',
		animation_time:				500,
		easing:						'linear',
		animation:					'slide',
		title_time:					200,
		title_easing:				'linear',
		controls:					true,
		autoplay:					false
	  };
	options = jQuery.extend({}, defaults, options); 
	var _slider = jQuery(this);
	var cur_s = 1;
	var blocker = 0;
	var container_width = 0;
	var elements = 0;
	var controls = '';
	var ap = options.autoplay;
	left = "phs"+guid();
	right = "phs"+guid();
	var repeat;
	_slider.wrap("<div class='phs_container' style='width:"+options.width+";height:"+options.height+";display: inline-block;'></div>");
/* including Font Awesome */
	if (!jQuery("link[href='http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css']").length) jQuery('head').append('<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" type="text/css" />');
		//generate unique id
	  function guid() {
		return Math.floor((1 + Math.random()) * 0x10000)
				   .toString(16)
				   .substring(1);
	};

/* Set Images as Background	*/
_slider.children().each(function( index ) {
		jQuery(this).css("background-image","url("+jQuery(this).children().attr("src")+")");
		jQuery(this).children("img").remove();
		if (index!=0) jQuery(this).children("span").css("bottom","-"+2*jQuery(this).children("span").outerHeight()+"px");
		})
	_slider.parent().css({"display":"table","height":_slider.parent().parent().height()});
	container_width = _slider.parent().width();
	_slider.css({width:container_width+"px",height:_slider.parent().parent().height()+"px"})
	_slider.children().css({width:container_width+"px",height:_slider.parent().parent().height()+"px"})
	_slider.children().each(function( index ) {
		jQuery(this).css("zIndex",_slider.children().length-index);
		if (jQuery(this).children("span").length>0) jQuery(this).attr("data-spanheight",jQuery(this).children("span").outerHeight());
		elements++;
	})

		function release_blocker()
	{
		blocker = 0;
		return true;
	}
	
	if (options.controls==true)
	{
	controls = '<div class="centercontrol"><i id="'+left+'" class="leftcontrol fa fa-chevron-left fa-2x"></i><i id="'+right+'" class="rightcontrol fa fa-chevron-right fa-2x"></i></div>';
	_slider.parent().prepend(controls);
	_slider.parent().children(".centercontrol").css({"width":container_width+"px","marginTop":_slider.innerHeight()/2+"px"});
	}
	jQuery(window).resize(function() {
		container_width = _slider.parent().width();
		_slider.css({width:container_width+"px",height:_slider.parent().parent().height()+"px"})
		_slider.children().css({width:container_width+"px",height:_slider.parent().parent().height()+"px"})
		_slider.children().each(function( index ) {
			if (jQuery(this).children("span").length>0) jQuery(this).attr("data-spanheight",jQuery(this).children("span").outerHeight());
		})
	});

/* Make Animation */
	
	function mh(tp,obj,dr)
	{
		if (tp=="out") 
		{
			if (obj.children("span").length>0) obj.children("span").animate({"bottom":"-"+obj.attr("data-spanheight")+"px"},options.title_time,options.title_easing,function(){poa(obj,dr);})
			else poa(obj,dr);
		}
		if (tp=="in") 
		{
			if (obj.children("span").length>0) obj.children("span").animate({"bottom":"-"+obj.attr("data-spanheight")+"px"},options.title_time,options.title_easing,function(){pia(obj,dr);})
			else pia(obj,dr);
		}
		if (tp=="iw") {if (obj.children("span").length>0) obj.children("span").animate({"bottom":"0px"},options.title_time,options.title_easing,function(){})}
	}
	
	function poa(obj,dr)
	{
		if (options.animation=="fadeslide"&&dr=="r") {
			obj.animate({left:container_width+"px",opacity:"0"},options.animation_time, options.easing, function(){obj.css("display","none")});
		}
		if (options.animation=="fadeslide"&&dr=="l") {
			obj.animate({left:"-"+container_width+"px",opacity:"0"},options.animation_time, options.easing, function(){obj.css("display","none")});
		}
		if (options.animation=="slide"&&dr=="r") {
			obj.animate({left:container_width+"px"},options.animation_time, options.easing, function(){obj.css("display","none")});
		}
		if (options.animation=="slide"&&dr=="l") {
			obj.animate({left:"-"+container_width+"px"},options.animation_time, options.easing, function(){obj.css("display","none")});
		}
		if (options.animation=="fade") obj.fadeOut(options.animation_time, options.easing, function(){obj.css("display","none")});
	}
	
	function pia(obj,dr)
	{
		if (options.animation=="fadeslide"&&dr=="r") {
			obj.css({"left":"-"+container_width+"px", "display":"table-cell", "opacity": "0" }).animate({left:"0px", opacity: "1"},options.animation_time, options.easing, function(){mh('iw',obj,dr);release_blocker();
			});
		}
		if (options.animation=="fadeslide"&&dr=="l") {
			obj.css({"left":container_width+"px", "display":"table-cell", "opacity": "0" }).animate({left:"0px", opacity: "1"},options.animation_time, options.easing, function(){mh('iw',obj,dr);release_blocker();});
		}
		if (options.animation=="slide"&&dr=="r") {
			obj.css({"left":"-"+container_width+"px", "display":"table-cell" }).animate({left:"0px"},options.animation_time, options.easing, function(){mh('iw',obj,dr);release_blocker();});
		}
		if (options.animation=="slide"&&dr=="l") {
			obj.css({"left":container_width+"px", "display":"table-cell" }).animate({left:"0px"},options.animation_time, options.easing, function(){mh('iw',obj,dr);release_blocker();});
		}
		if (options.animation=="fade") obj.fadeIn(options.animation_time, options.easing, function(){mh('iw',obj,dr);release_blocker();});
		if (options.autoplay!=false) repeat = setTimeout(function(){hnd_s("r")},options.autoplay);
	}
	
   	function scr(dr){
	blocker = 1;
		_slider.children().each(function( index ) {
			if (index != cur_s-1) mh('out',_slider.children().eq(index),dr);
			else mh('in',_slider.children().eq(cur_s-1),dr);
		})
	}

	function s_auto()
	{
		options.autoplay = false;
		clearTimeout(repeat);
	}
	
	function hnd_s(dr)
	{
		if (blocker == 0)
		{
		if (dr=="l") cur_s--;
		if (dr=="r") cur_s++;
		if (cur_s>elements) cur_s = 1;
			if (cur_s<1) cur_s = elements;
				scr(dr);
		  return false;	
		 }
	}
	jQuery(document).keydown(function(e){
		if (e.keyCode == 37) {hnd_s("l");s_auto();}
		if (e.keyCode == 39) {hnd_s("r");s_auto();}
	});
	if (jQuery("#"+left).length==0) jQuery("body").append("<a href='#' id='"+left+"'></a>");
	if (jQuery("#"+right).length==0) jQuery("body").append("<a href='#' id='"+right+"'></a>");
	if (jQuery(_slider.selector+"_autoplay").length==0) {
	if (_slider.selector.indexOf("#")<0) jQuery("body").append("<a href='#' class='"+_slider.selector.replace(".","")+"_autoplay"+"'></a>");
	else jQuery("body").append("<a href='#' id='"+_slider.selector.replace("#","")+"_autoplay"+"'></a>");
	}
	_slider.on("swipeleft",function(){hnd_s("l");s_auto();});
	_slider.on("swiperight",function(){hnd_s("r");s_auto();});
	jQuery("#"+left).click(function() {hnd_s("l");s_auto();})
	jQuery("#"+right).click(function() {hnd_s("r");s_auto();})
	jQuery(document).on("click",_slider.selector+"_autoplay",function() {if (options.autoplay==false) {options.autoplay = ap;hnd_s("r");}else {options.autoplay = false;s_auto();}})
	if (options.autoplay!=false) repeat = setTimeout(function(){hnd_s("r")},options.autoplay);
	},
    autoplay : function() {
		jQuery( jQuery(this).selector+"_autoplay" ).trigger( "click" );
	},
    next : function() {
		jQuery( "#"+right ).trigger( "click" );
	},
    prev : function() {
		jQuery( "#"+left ).trigger( "click" );
	},
    destroy : function() {
		jQuery(this).remove();
		return 1;
	}
    };
jQuery.fn.phslider = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            return methods.init.apply( this, arguments );
        } else {
            jQuery.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.phslider' );
        }    
    };
})( jQuery );