# Phantom Touch Slider - jQuery Plugin

Phantom Slider is a Super-LightWeight, Mobile-Friendly, Responsive Slider. 
Offers medium features with high performance and quality.

## Features ##
* Unlimited Layers
* Responsive, always fit to the parent container, Mobile Swipe-Ready
* Completely FREE with MIT Licence
* Supports HTML elements in the Captions
* Clean Code with less than 5kB size
* 60+ animation style combinations with jQuery Easing
* init, destroy, autoplay, next, previous Methods for Developers

## Usage ##
```javascript
<script type='text/javascript' src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type='text/javascript' src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script src="jquery.mobile.custom.min.js"></script>
<script src="phantom.slider.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	$(".slider").phslider({
							'animation_time':700,
							'easing':'easeInOutQuint',
							'animation':'slide',
							'title_time':400,
							'title_easing':'easeInOutBack',
							'controls':true,
							'autoplay':1000
					});
})
</script>
```

## Basic Markup Without Captions ##
```html
		<div style="width: 600px;height: 400px;" id="container">
			<ul class="slider phs">
				<li>
					<img src="images/1.jpg" alt="image 1">
				</li>
				<li>
					<img src="images/2.jpg" alt="image 2">
				</li>
				<li>
					<img src="images/3.jpg" alt="image 3">
				</li>
				<li>
					<img src="images/4.jpg" alt="image 4">
				</li>
				<li>
					<img src="images/5.jpg" alt="image 5">
				</li>
			 </ul>
		</div>
```
In the example above, the container div has a fixed size, but you can also resize it with jQuery to fit to the window or to any other parent element with CSS.

## License ##

Phantom Touch Slider is published under the [MIT license](http://www.opensource.org/licenses/mit-license).
If you would like to use it, please check the conditions on the Demo Page

## [Demo Page and Full Details](http://sympies.com/phantom-slider-jquery-touch-slider-plugin) ##

Check out my Premium Plugins:

[Theme Slider jQuery FullScreen Touch Slider Plugin](http://sympies.com/theme-slider-jquery-plugin/)

[FullScreen Background Slider - jQuery SlideShow](http://sympies.com/fullscreen_background_slider/)
