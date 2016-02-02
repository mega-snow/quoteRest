requirejs.config({
    //urlArgs: "vers=1245",
//  deps: ['main'],
    paths: {
        'backbone': '../lib/backbone-1.2.3.min',
        
        'jquery': '../lib/jquery-1.9.1.min',
        'bootstrap': '../lib/bootstrap.min',
        'bootpag': '../lib/jquery.bootpag.min',
        'datetimepicker': '../lib/jquery.simple-dtpicker',
        'underscore': '../lib/underscore-1.8.3.min',
        'text': '../lib/rjs-text',
        'globalite': '../app/util/translation/globalite',
        'languages': '../app/util/translation/languages',
        'datatables': '../lib/datatables.min',
        'formatDateTime': '../lib/jquery.formatDateTime.min'
   },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'datetimepicker': {
            deps: ['jquery'],
            exports: 'datetimepicker'
        },
        'datatables': {
            deps: ['jquery'],
            exports: 'datatables'
        },
        
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        
        'bootpag':{
            deps: ['jquery', 'bootstrap'],
            exports: 'bootstrap'            
        },
        
        'formatDateTime': {
            deps: ['jquery'],
            exports: 'formatDateTime'
        },
    }
});


requirejs([
    // Deps 
    'jquery',
    'backbone',
    'App'
],
        function ($, Backbone, App) {
            $(document).ready(function () {
                new App();
            });

        });