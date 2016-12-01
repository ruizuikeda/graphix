// Create our angular module
var App = angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngStorage'
]);

App.config(
    ['$stateProvider', '$urlRouterProvider',
     function ($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise('/');
         $stateProvider
             .state('/', {
             url: '/',
             controller: 'indexController',
             templateUrl: 'templates/index/login.html',
             resolve: {
                 
             }
         })
             .state('/auth', {
             url: '/auth',
             controller: 'indexController',
             templateUrl: 'auth/index',
             resolve: {

             }
         })
     }
    ]
);

App.run(function($rootScope,$state){
    // When view content is loaded
    $rootScope.$on('$viewContentLoaded', function () {
        
    });
});




