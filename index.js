/**
 * Live event binding in vanilla JS, from StackOverflow:
 * http://stackoverflow.com/questions/9106329/implementing-jquerys-live-binder-with-native-javascript
 * 
 * @param  {String}   eventType     Event Type (click/hover/etc.)
 * @param  {String}   querySelector Valid document.querySelectorAll statement
 * @param  {Function} callback      Event handler function
 */
function liveEvents (eventType, querySelector, callback) {
	document.addEventListener(eventType, function (event) {

		var qs = document.querySelectorAll(querySelector);

        if (qs) {
            var el = event.target, index = -1;
            while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                el = el.parentElement;
            }

            if (index > -1) {
                callback.call(el, event);
            }
        }
	});
}

module.exports = liveEvents;