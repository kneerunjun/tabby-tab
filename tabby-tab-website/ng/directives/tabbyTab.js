(function () {
    var tabbyTab = angular.module("myApp").directive("tabbyTab", function () {
        return {
            restrict: "E",
            templateUrl: "/ng/directives/templates/tabbyTab.html",
            scope: {
                cloak: "=",
            },
            controller: function ($scope) {
                console.log("this is from inside the controller")
                console.log($scope.cloak);
                $scope.onbtnClick = function () {
                    console.log("button has been clicked and we have recived the notification");
                };
                $scope.tabs = [];
                $scope.activeTabIndex = 0;//so that the first tab is always pre-selected
                $scope.onHit = function (t) {
                    $scope.activeTabIndex = t.tabIndex;//directly sets the tab index for the activated condition
                }
            },
            link: function (scope, elem, attrs, cntrl, transclusion) {
                var tabContents = $(elem[0]);
                var tContent = $(transclusion())
                console.log(tContent);
                var tabbyContent = $(tContent).siblings('.tabby-tab-content');
                console.log(tabbyContent);
                console.log('we have found' + tabbyContent.length + ' number of tab content transcluded in the tabby tab');
                console.log('we are preparing to set the tabs for the content divs now');
                for (var i = 0; i < tabbyContent.length; i++) {
                    scope.tabs.push(
                      {
                          tabIndex: i,
                          tabTitle: $(tabbyContent[i]).attr('tabby-title'),
                          active: false,
                          content: tabbyContent[i]
                      });
                }
                console.log('now logging the added tabs into the scope');
                console.log(scope.tabs);

                //here we go ahead to change the nature of the input elements


            },
            transclude: true
        }
    });
})();