/*
jQuery plugin module for swapping image(s)
Author: Tomex Ou <tomexou@163.com>
Update: 2015-11-06 04:37:37
*/
var $SwapImage = (function () {

	// Settings in default.
	var settingsDefault = {
		attrIn: 'data-in',
		attrOut: 'data-out',
		preloadImages: true
	};

	// Preloading the swapping images.
	var preloadImages = function (selectors, settings) {
		$.each(selectors, function (idx, item) {
			var img = new Image();
			img.src = $(item).attr(settings.attrIn);
			//console.log(img.src);
		});
	};

	return {

		// Hover (mouseenter and mouseout)
		bindHoverEvents: function (selectors, settings) {
			
			if (!settings)
				settings = settingsDefault;

			// Preloading the swapping images.
			if (settings.preloadImages)
				preloadImages(selectors, settings);

			// Bind the mouse hover events.
			selectors.hover(
				function () {
					//console.log(settings.attrIn);
					this.src = $(this).attr(settings.attrIn);
				},
				function () {
					//console.log(settings.attrOut);
					this.src = $(this).attr(settings.attrOut);
				}
				);
		}


	};
})();
