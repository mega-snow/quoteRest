
define([

  // Libs
  'backbone'
  

], function(Backbone) {

  var Cookie = Backbone.Model.extend({    
  	
    initialize: function() {
    
    },
    getCookie :function(name) {
      var cookie = " " + document.cookie;
      var search = " " + name + "=";
      var setStr = null;
      var offset = 0;
      var end = 0;
      if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
          offset += search.length;
          end = cookie.indexOf(";", offset)
          if (end == -1) {
            end = cookie.length;
          }
          setStr = unescape(cookie.substring(offset, end));
        }
      }
      return(setStr);
    },

  	
  });


  return Cookie;

})