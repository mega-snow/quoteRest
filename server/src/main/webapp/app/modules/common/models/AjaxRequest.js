define([    
    'jquery',
    'backbone',
    'underscore'

], function($, Backbone, _) {

  var AjaxRequest = Backbone.Model.extend({
    defaults:{
    	requestURLS : {
        '/quote/list'   : '/rest/quote/list', 
        '/quote/add'   : '/rest/quote/add', 
        '/author/list'   : '/rest/author/list', 
        
                        
      	},
    	type: 'POST',
        //type: 'GET',
    	dataType: "json",
    	contentType: 'application/json',
    	crossDomain:false
    },


    showPreLoader: function(){        
        $(".loading").html('Loading');
        $(".loadingFon").show();

    },
    hidePreLoader: function(){
        //$(".someclass").hide();
        $(".loadingFon").fadeOut(100);
    },

    send : function(options, sendData){    	
        var sData = JSON.stringify(sendData);       
        var url = options.url;
        if (this.get('requestURLS')[options.url] !== undefined){
        	url = this.get('requestURLS')[options.url];        	
        }
        this.showPreLoader();
        var that = this;
    	$.ajax({
                type: this.get('type'),                
                url: url,
                dataType: this.get('dataType'),
                contentType: this.get('contentType'),
                crossDomain: this.get('crossDomain'),
                data: sData,
                context: options.context,
                /*beforeSend: function(xhr) {
                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },*/
                success: function (data) {                                        
                    that.hidePreLoader();
                    options.clbSuccess.call(this,data);
                },
                error: function (data) {                    
                    that.hidePreLoader();
                    options.clbError.call(this,data);
                }
            });    
    },
  });
  return AjaxRequest;
})