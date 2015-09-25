(function () {
    var blurOnHit = angular.module("myApp").directive('blurOnHit', function () {
        return {
            restrict: "A",
            link: function (scope, elem, attrs) {

                $(elem[0]).on('click', function (event) {
                    $(elem[0]).blur();
                })
            }

        }
    })
})();