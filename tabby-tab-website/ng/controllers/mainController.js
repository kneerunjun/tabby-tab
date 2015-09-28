(function () {
    var mainController = angular.module("myApp").controller("mainController", function ($scope, $window) {
        $scope.gotoWikiPage = function () {
            $window.location.href = "https://github.com/kneerunjun/tabby-tab/wiki";
           
        }
    })
})();