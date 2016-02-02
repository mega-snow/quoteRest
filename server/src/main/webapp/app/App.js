define([
	// Libs
	'backbone',
	'jquery',	
	'modules/quote/models/QuoteManager',
	'modules/quote/views/QuoteManagerView'
	
	
], function(Backbone, $, QuoteManager, QuoteManagerView) {
	
	var quoteApp = Backbone.Model.extend({
		
	initialize: function() {
		this.quoteManager = new QuoteManager();
		this.quoteManagerView = new QuoteManagerView({model: this.quoteManager});
                                            this.quoteManager.loadQuotes(1);
	},	
	});
	return quoteApp;

})