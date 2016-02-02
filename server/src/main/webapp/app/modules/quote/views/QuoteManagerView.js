
define([
  // Libs
  'jquery',
  'backbone',  
  'bootstrap',  
  'bootpag',
  'text!../templates/QuoteManagerTpl.html',
  'text!../templates/QuoteTpl.html',
  'text!../templates/DialogAddTpl.html',

], function($, Backbone,bootstrap, bootpag, QuoteManagerTpl, QuoteTpl, DialogAddTpl) {
  
  var View = Backbone.View.extend({    
    el:$('quoteAppJS'),
    events:{      
      'click #linkAddQuote' :'onLinkAddQuote',
      'change #authorList' : 'changeAuthorList',
      'click .btn-primary': 'onSave',
    },
    
    template: _.template( QuoteManagerTpl ),
    templateQuote : _.template(QuoteTpl),
    templateDialog: _.template(DialogAddTpl),
    initialize: function() {
        this.assign({'#quoteAppJS': this});
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'showDialog', function(listAuthors){  this.renderDialog(listAuthors); } );
        this.listenTo(this.model, 'dialog:hide', this.hideDialog );
        this.listenTo(this.model, 'change:quotesCollection', this.renderPageContent );
        this.listenTo(this.model, 'change:totalPages', this.renderPagination );
        this.render();
    },  
    onLinkAddQuote: function(){
        //$('#myModal').modal({ show:true });
        this.model.loadAuthors();
    },
    
    render: function(){
      var content = this.template( { manager:this.model.toJSON() } );
      this.$el.html(content);      
      
      this.$('#page-content').empty();
      var self = this;
      this.model.get('quotesCollection').each(function(q){
            var content = self.templateQuote( {quote: q.toJSON() } );
            self.$('#page-content').append(content);
      } );                  
      
      // dialog 
      /*
      var content = this.templateDialog({});
      $('#myModal').empty();
      $('#myModal').append(content);
      $('#myModal').modal({ show:false });      */
        this.renderPagination();
        return this;
    },    
    
    renderPagination: function(){
        var self = this;
        if ( self.model.get('totalPages') ){
                $('#pagination').bootpag({
                     total: self.model.get('totalPages'),
                     page: 1,
                     maxVisible: 10
                 }).on('page', function(event, num){                
                     self.model.loadQuotes(num);                
                 });
        }
    },
    
    renderPageContent: function(){
            this.$('#page-content').empty();
            var self = this;
            this.model.get('quotesCollection').each(function(q){
                var content = self.templateQuote( {quote: q.toJSON() } );
                self.$('#page-content').append(content);
            } );                  
    },
    renderDialog: function(listAuthors){
      var content = this.templateDialog({authors: listAuthors});
      $('#myModal').empty();
      $('#myModal').append(content);
      $('#myModal').modal({ show: "false", backdrop:"false" });
    },
    
    hideDialog: function(){
        $('#myModal').modal('hide');      
    },
    
    changeAuthorList: function(e){       
       var selAuthor = $(e.target).find('option:selected').get(0).outerText;
       $('#author').val(selAuthor);
    },
    
    onSave: function(){
        
        var author = this.$('#author').val();
        var text = this.$('#text').val();
        this.model.saveQuote(author, text);
        $('#myModal').modal({ show: "false", backdrop:"false" });      
        
    },
    
    assign: function (selector, view) {
	    var selectors;
	 
	    if (_.isObject(selector)) {
	        selectors = selector;
	    }
	    else {
	        selectors = {};
	        selectors[selector] = view;
	    }
	 
	    if (!selectors) return;
	 
	    _.each(selectors, function (view, selector) {
	        //view.setElement(this.$(selector))/*.render()*/;
	        view.setElement($(selector))/*.render()*/;
	    }, this);
            },
    
  });
  return View;

});
