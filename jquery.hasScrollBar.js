/**
 * jQuery has scroll bar check
 *
 * @package jquery.hasScrollBar
 * @author TJ Draper <tj@buzzingpixel.com>
 * @version 1.0.0
 */

(function($) {
	$.fn.hasScrollBar = function() {
		if (! this.get(0)) {
			return false;
		}

		return this.get(0).scrollHeight > this.height();
	}
})(jQuery);
