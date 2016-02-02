
define([
  // Libs
  'jquery',
  'backbone',
  'underscore',
  'formatDateTime',
  '../../common/models/AjaxRequest',

], function($, Backbone, _, formatDateTime, AjaxRequest) {

var Quote = Backbone.Model.extend({
    defaults:{

    },

    initialize: function() {
        //this.set( 'date', ( this.get('date')*1000 ), {silent:true} );
        var date = $.formatDateTime('dd.mm.yy hh:ii', new Date( this.get('date')  ) );
        this.set( 'date', date, {silent:true});
    },


  });

  return Quote;

})