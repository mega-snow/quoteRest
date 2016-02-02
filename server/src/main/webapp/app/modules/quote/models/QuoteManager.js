
define([
  // Libs
  'backbone',
  'underscore',
  '../../common/models/AjaxRequest',
  '../models/Quote',

], function(Backbone, _, AjaxRequest, Quote) {

var QuoteManager = Backbone.Model.extend({
    defaults:{
      totalPages: undefined,
      startPage: 1,
      visiblePages:5,
      curPage: 1,
      sizePage: 5,
      countQuotesOnPage:5,
      quotesCollection: new Backbone.Collection,
      authorsCollection: new Backbone.Collection,
    },

    initialize: function(data) {
      this.ajaxRequest = new AjaxRequest();
      
    },

    convertPageToIndex: function(page){
        return (page-1)*this.get('sizePage')+1;
    },
    calcTotalPage: function(countQuotes){
        return Math.ceil(countQuotes / this.get('sizePage'));
    },
    
    
    loadQuotes: function(page){
      var firstInd = this.convertPageToIndex(page);
      var options = {
          url     :'/quote/list',
          clbSuccess: this.clbLoadQuotesSuccess,
          clbError:   this.clbRequestError,
          context :   this
        };
        var params = {
            first: firstInd,
            count: this.get('sizePage')
        };
        this.ajaxRequest.send(options, params );
    },
    
    parseError: function(response){
        if ( response.result.code > 0){
            this.trigger('invalid', response.result.desc);
            return true;
        }
        return false;
    },
    
    resizePagination:function(response){
        var newTotalPages = this.calcTotalPage(response.totalCount);
        if  (newTotalPages != this.get('totalPages') ){
            this.set('totalPages', this.calcTotalPage(response.totalCount) ,{silent:true});
            this.trigger('change:totalPages');
        }
    },
    
    fillQuotesCollection: function(response){
        var qColl = this.get('quotesCollection');
        qColl.reset();
        _.each(response.list, function(qJSON){
            var quote = new Quote(qJSON);
            qColl.add(quote);
        } );
        
        this.resizePagination(response);
        
        this.trigger('change:quotesCollection');
    },

    clbLoadQuotesSuccess: function(response){
      //console.log(response);
      if ( this.parseError(response)){
          return;
      }
        this.fillQuotesCollection(response);
    },

    clbRequestError: function(response){
      this.trigger('invalid', 'Server error');
    },
    
    loadAuthors: function(){
       var options = {
          url     :'/author/list',
          clbSuccess: this.clbLoadAuthorSuccess,
          clbError:   this.clbRequestError,
          context :   this
        };
        
        this.ajaxRequest.send(options, {}  );
    },
    
    clbLoadAuthorSuccess: function(response){
        if ( this.parseError(response)){
          return;
        }
        this.fillAuthorsCollection(response);
    },
    
    fillAuthorsCollection: function(response){
        var aColl = this.get('authorsCollection');
        aColl.reset();
        _.each(response.list, function(aJSON){
            //var quote = new Quote(aJSON);
            aColl.add(aJSON);
        } );
        this.trigger('showDialog', aColl);
        
    },
    
    saveQuote: function(author, text){
        var options = {
          url     :'/quote/add',
          clbSuccess: this.clbAddQuotesSuccess,
          clbError:   this.clbRequestError,
          context :   this
        };
        var params = {
            'author': author,
            'text' : text,
        };
        this.ajaxRequest.send(options, params );
    },
    
    clbAddQuotesSuccess: function(response){
        if ( this.parseError(response)){
          return;
        }
        if (this.get('quotesCollection').size() < this.get('sizePage') ){
            var q = new Quote(response.quote);        
            this.get('quotesCollection').add(q);
            this.trigger('change:quotesCollection');
        }
        this.get('total')
        this.resizePagination(response);
        this.trigger('dialog:hide');
    }
    


  });

  return QuoteManager;

})