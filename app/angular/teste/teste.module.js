App.config(
    ['$stateProvider', '$urlRouterProvider',
     function ($stateProvider, $urlRouterProvider) {
         $stateProvider
             .state('/teste', {
             url: '/teste',
             controller: 'testeController',
             templateUrl: 'templates/teste/teste.html',
             resolve: {

             }
         })
     }
    ]
);




App.controller('testeController', ['$scope', '$rootScope', '$window', '$state', function ($scope, $rootScope, $window, $state) {
    var self = this;
    log_controller('testeController');

}]);
