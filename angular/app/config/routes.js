angular.module('financeApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: "/dahsboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle', {
            url: "/billingCycle?page",
            templateUrl: "billingCycle/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashobard')
    }
])