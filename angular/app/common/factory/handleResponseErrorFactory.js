(function () {
    angular.module('financeApp').factory('handleResponseError', [
        '$q',
        '$window',
        'consts',
        HandleResponseErrorFactory
    ])

    function HandleResponseErrorFactory($q, $window, consts) {
        function responseError(errorResponse) {
            //recebe a resposta
            if (errorResponse.status === 403) {
                //apaga o localStorage
                localStorage.removeItem(consts.userKey)
                //redireciona página autenticação
                $window.location.href = '/'
            }
            return $q.reject(errorResponse)
        }
        return {
            responseError
        }
    }
})()