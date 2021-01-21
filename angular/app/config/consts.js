angular.module('financeApp').constant('consts', {
    appName: 'Finance - Controle Financeiro',
    version: '1.0',
    owner: 'Micz',
    year: '2020',
    site: 'https://42telecom.com.br',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_finance_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])