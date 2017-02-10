(function () {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);
    IndexController.$inject = ['$filter', 'BudgetService'];

    function IndexController($filter, BudgetService) {
        var vm = this;
        vm.costs = BudgetService.getCosts();
        vm.totalAmount = BudgetService.getTotalAmount(vm.costs);
        vm.labels = vm.costs.map(function(item){
            return $filter('date')(item.date, "MMM d");
        });
        vm.series = ['Costs'];
        vm.data = vm.costs.map(function(item){
            var amount;
            item.type === 'outcome' ? amount = item.amount*(-1) : amount = item.amount;
            return amount;
        });
        vm.options = {
            chartArea: {
                backgroundColor: '#FAFAFA'
            },
            elements: {
                line: {
                    borderWidth: 3,
                    borderColor: '#DD2C00',
                    fill: false
                },
                point: {
                    radius: 3,
                    borderColor: "#00C853"
                }
            },
            scales : {
                xAxes : [ {
                    gridLines : {
                        display : false
                    }
                } ],
                yAxes : [ {
                    gridLines : {
                        display : false
                    }
                } ]
            }
        }
        vm.datasetOverride = [
            {
                label: "Line chart",
                fill: false,
                type: 'line'
            }
        ];
    }
})();
