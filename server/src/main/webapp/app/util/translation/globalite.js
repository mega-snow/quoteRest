/**
 * @module Globalite
 * common translation functionality
 *
 * Attention! It extends String by own functions!
 */

define(['jquery'], function($){

var Globalite = {

	/**
	 * @function language - adds new translation
	 *
	 * @param {String} lang - language descriptor
	 * @param {Object} obj - translations items set
	 */
	language: function(lang, obj) {
		if (this[lang] == undefined) {
			this[lang] = {};
		}
		$.extend(this[lang], obj);
	},

	/**
	 * @function setLang - sets current Language ('en' - custom)
	 *
	 * @param {String} lang
	 */
	setLang: function(lang) {
		lang = lang || 'en';
		if (lang === 'ru') {
			$("html").attr("lang", 'ru-ru');
		} else {
			$("html").attr("lang", 'en-gb');
		}

	}
};

/**
 * @function l (extends String prototype)
 *
 * @param {String} - default message (missing translation)
 * @param {Array} args - arguments to replace {0}, {1}, ... to it`s values
 *
 * @returns {String | Undefined} localized  - localized string || missed localization message || undefined
 */
String.prototype.l = function(msg, args) {
	key = this;
	msg = msg == undefined ? "__localization_missing__" : msg
	// Get lang attribute from html tag
	language = $("html").attr("lang");
	if (language === 'ru-ru') {
		language = 'ru';
	} else {
		language = 'en';
	}
	if (!Globalite[language])
		return;

	localized = Globalite[language][key];

	if (localized == undefined) {
		$.each(Globalite, function(k, v) {
			if (localized == undefined) {
				localized = v[key];
			}
		});
		if (localized == undefined) {
			localized = msg;
		}
	}

	if (args != undefined) {
		$.each(args, function(i, arg) {
			localized = localized.replace(new RegExp("\\{" + i + "\\}"), arg);
		});
	}

	return localized;
}

/**
 * @function localize - l() wrapper
 *
 * @param {String} - default message (missing translation)
 * @param {Array} args - arguments to replace {0}, {1}, ... to it`s values
 *
 * @returns {String | Undefined} localized  - localized string || missed localization message || undefined
 */
String.prototype.localize = function(msg, args) {
	return this.l(msg, args);
};

/**
 * @function l_with_args - l() wrapper
 *
 * @param {Array} args - arguments to replace {0}, {1}, ... to it`s values
 * @param {String} - default message (missing translation)
 *
 * @returns {String | Undefined} localized  - localized string || missed localization message || undefined
 */
String.prototype.l_with_args = function(args, msg) {
	return this.l(msg, args)
};

/**
 * @function localize_with_args - l() wrapper
 *
 * @param {Array} args - arguments to replace {0}, {1}, ... to it`s values
 * @param {String} - default message (missing translation)
 *
 * @returns {String | Undefined} localized  - localized string || missed localization message || undefined
 */
String.prototype.localize_with_args = function(args, msg) {
	return this.l(msg, args);
}

/**
 * @fnction showPropertiesObject, parsing and show properties object
 */
function showPropertiesObject(object) {
    for(var key in object) {
        console.log(object[key]);
    }
}

/**
 *
 */
function isHttpsProtocolFromURL(url) {
    var ar = url.split(':');
    return (ar[0] === 'https');
}

return Globalite;

});