(function () {
    'use strict';

    angular
        .module('app')
        .config(config);
        
    config.$inject = ['$stateProvider', '$locationProvider'];
    function config($stateProvider, $locationProvider) {
        // adding ability to configure chart background
        Chart.pluginService.register({
            beforeDraw: function (chart, easing) {
                if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                    var helpers = Chart.helpers;
                    var ctx = chart.chart.ctx;
                    var chartArea = chart.chartArea;

                    ctx.save();
                    ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
                    ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                    ctx.restore();
                }
            }
        });
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