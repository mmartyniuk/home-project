(function () {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);
    IndexController.$inject = [];

    function IndexController() {
        var vm = this;
        vm.title = 'App da231312t21a1';
    }
})();
