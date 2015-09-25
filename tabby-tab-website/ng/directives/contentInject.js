(function () {
    var contentInject = angular.module("myApp").directive('contentInject', function () {
        return {
            restrict: "A",
            link: function (scope, elem, attrs) {
                console.log('we are now inside the content-inject directive..');
                var element = $(elem[0]);
                console.log(scope.t.content);
                $(element).append(scope.t.content);
            }
        }

    });
})();