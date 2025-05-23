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
## Basic Markup With Captions ##
```html
		<div style="width: 600px;height: 400px;" id="container">
			<ul class="slider phs">
				<li>
					<img src="images/1.jpg" alt="image 1">
					<span>Caption 1</span>
				</li>
				<li>
					<img src="images/2.jpg" alt="image 2">
					<span>Caption 2</span>
				</li>
				<li>
					<img src="images/3.jpg" alt="image 3">
					<span>Caption 3</span>
				</li>
				<li>
					<img src="images/4.jpg" alt="image 4">
					<span>Caption 4</span>
				</li>
				<li>
					<img src="images/5.jpg" alt="image 5">
					<span>Caption 5</span>
				</li>
			 </ul>
		</div>
```
In the example above, the container div has a fixed size, but you can also resize it with jQuery to fit to the window or to any other parent element with CSS.

## License ##

Phantom Touch Slider is published under the MIT license.
If you would like to use it, please check the conditions on the Demo Page

## Other Projects ##

#### [Board Game Upgrades](https://boardgameset.com) ####

## WordPress Projects ##

#### [Swift Woo Search - WooCommerce Smart Search Plugin](https://swiftwoosearch.com) ####
