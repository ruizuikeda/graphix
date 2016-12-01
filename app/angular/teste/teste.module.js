App.factory('testeFactory', function($q, $http){
    return {
        get_hash: function(){
            var deferred = $q.defer();
            var url = 'teste/usuario/hash';
            var params = $.param({});
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post(url, params, config)
                .success(function(data, status, headers, config){
                deferred.resolve(data);
            }).error(function(data, status, headers, config){
                console.log('erro');
            });

            return deferred.promise;
        }
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
                 hash: function(testeFactory){
                     var hash = testeFactory.get_hash();
                     return hash;
                 }
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




App.controller('testeController', ['hash', '$scope', '$rootScope', '$window', '$state', '$http', '$sessionStorage', function (hash, $scope, $rootScope, $window, $state, $http, $sessionStorage) {
    var self = this;
    log_controller('teste');

    $scope.teste = "Testando!";


    $scope.login = "";
    $scope.senha = "";

    $scope.valida = function(){
        var login = $scope.login;
        var senha = $scope.senha;

        var url = 'teste/usuario/valida';
        var params = $.param({
            login: login,
            senha: senha,
            csrf_token_graphis: hash
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

                    break;
            }
        }).error(function(data, status, headers, config){
            console.log('erro');
        });
    };

}]);



































