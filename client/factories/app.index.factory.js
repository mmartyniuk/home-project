(function () {
    'use strict';

    angular
        .module('app')
        .factory('BudgetService', BudgetService);

    BudgetService.$inject = ['$http'];

    function BudgetService($http) {
        return {
            getTotalAmount: function(costs) {
                var incomes = 0, outcomes = 0;
                costs.forEach(function(cost) {
                    cost.type === 'outcome' ? outcomes += cost.amount : incomes += cost.amount;
                });
                console.log(incomes, outcomes);
                return incomes - outcomes;
            },
            getCosts: function() {
                var costs = [
                    {
                        name: 'Mykola Martyniuk',
                        id: 1,
                        amount: 100,
                        date: 1387843200000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'income'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 2,
                        amount: 200,
                        date: 138784465765,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'outcome'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 3,
                        amount: 2200,
                        date: 1387843330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'income'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 4,
                        amount: 20,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'outcome'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        description: 'Lorem Ipsum has been the industrys standard',
                        id: 4,
                        amount: 40,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'income'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 4,
                        amount: 20,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'outcome'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 4,
                        amount: 88,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'income'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 4,
                        amount: 255,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'outcome'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 4,
                        amount: 900,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'income'
                    },
                    {
                        name: 'Mykola Martyniuk',
                        id: 4,
                        amount: 1200,
                        date: 1387893330000,
                        description: 'Lorem Ipsum has been the industrys standard',
                        type: 'income'
                    }
                ];
                return costs;
            }
        };
    }
})();