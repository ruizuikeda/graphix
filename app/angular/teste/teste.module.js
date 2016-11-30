App.factory('testeFactory', function($q){
    return {

    }
});

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
             .state('/teste/usuario', {
             url: '/teste/usuario',
             controller: 'testeController',
             templateUrl: 'teste/usuario/1',
             resolve: {

             }
         })
     }
    ]
);




App.controller('testeController', ['$scope', '$rootScope', '$window', '$state', function ($scope, $rootScope, $window, $state) {
    var self = this;
    log_controller('teste');

    $scope.teste = "Testando!";


}]);
