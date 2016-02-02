
define([

  // Libs
  'backbone',
  'jquery'
  

], function(Backbone, $) {

var utilLanguange = Backbone.Model.extend({    
	
	getLang: function() {
        var lang = this.getLangParam();
        if (!lang) {
            lang = this.getLangPath();
        }
        if (!lang) {
            lang = this.getLangHTMLTag();
        }
        if (!lang) {
            lang = this.getLangBrowser();
        }
        if (!lang) {
            lang = "ru";
        }
        //TODO: add check window.navigator.language
        return lang;
    },
	//------------------------------------------------------------------
	getLangPath:function() {
        var regexS = "\\/(ru|en)\\/";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) {
            return "";
        } else {
            return results[1];
        }
    },
    //------------------------------------------------------------------
    getLangHTMLTag:function() {
        var l = $('html').attr('lang');
        if (l && l.length > 2) {
            l = l.substr(0, 2);
        }
        return l;
    },
    //------------------------------------------------------------------
    getLangParam:function() {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]locale=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) {
            return "";
        } else {
            return results[1];
        }
    },
    //------------------------------------------------------------------
    getLangBrowser:function() {
        var l = '';
        if (navigator.userLanguage) {// Explorer
            l = navigator.userLanguage;
        } else if (navigator.language) {// FF
            l = navigator.language;
        }

        if (l.length > 2) {
            l = l.substr(0, 2);
        }
        return l;
    }

  });


  return utilLanguange;

})