(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'index',
                config: {
                    url: '/',
                    templateUrl: './views/index.html',
                    controller: 'IndexController',
                    controllerAs: 'vm',
                    title: 'Index'
                }
            }
        ];
    }

})();