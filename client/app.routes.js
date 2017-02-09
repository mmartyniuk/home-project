(function () {
    'use strict';

    angular
        .module('app')
        .config(config);
        
    config.$inject = ['$stateProvider', '$locationProvider'];
    function config($stateProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        
        var index = {
            name: 'index',
            url: '/',
            templateUrl: './views/app.html',
            controller: 'IndexController',
            controllerAs: 'vm'
        }
        var about = {
            name: 'about',
            url: '/about',
            templateUrl: './views/about.html',
            controllerAs: 'vm'
        }
        
        $stateProvider.state(index);
        $stateProvider.state(about);
    }
})();