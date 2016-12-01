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




App.controller('testeController', ['$scope', '$rootScope', '$window', '$state', '$http', function ($scope, $rootScope, $window, $state, $http) {
    var self = this;
    log_controller('teste');

    $scope.teste = "Testando!";


    $scope.login = "";
    $scope.senha = "";

    $scope.valida = function(){
        var login = $scope.login;
        var senha = $scope.senha;
        //teste/usuario/valida

        var url = 'teste/usuario/valida';
        var params = $.param({
            login: login,
            senha: senha
        });
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post(url, params, config)
            .success(function(data, status, headers, config){
            console.log(data);
            switch(data){
                case -1:
                case '-1':
                    //erro
                    $window.alert('Usuário ou senha inválida.');
                    break;
                default:
                    //sucesso
                    var json = [];
                    $.each($window.sessionStorage, function(i, v){
                        console.log(i);
                        console.log(v);
                        json.push(angular.fromJson(v));
                    });
                    console.log(json);
                    break;
            }
        }).error(function(data, status, headers, config){
            console.log('erro');
        });
    };

}]);



































