(function () {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);
    IndexController.$inject = [];
    
    function IndexController() {
        var vm = this;
        vm.title = 'App data';
        console.log(vm.title, 'vm.title');
    }
})();