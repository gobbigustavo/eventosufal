(function () {
    'use strict';

    angular.module('tp.app', ['ngRoute', 'tp.home', 'tp.mainMenu', 'ui.bootstrap', 'tp.item1'])

    .config(['$routeProvider',
    function (routeProvider) {
            routeProvider.
            when('/', {
                templateUrl: 'app_modules/home/home.html',
                controller: 'HomeCtrl'
            }).
            when('/main', {
                templateUrl: 'app_modules/home/home.html',
                controller: 'HomeCtrl'
            }).
            when('/item-1', {
                templateUrl: 'app_modules/item-1/item1.html',
                controller: 'Item1Ctrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }])
    .controller('AppCtrl', function($scope, MainMenuService){

        initialize();

        function initialize(){
            //SNAPPER
            $scope.snapper = new Snap({
                element: document.getElementById('content'),
                disable: 'right'
            });

            //MAIN MENU ITEMS
            $scope.mainMenuItems = MainMenuService.getItems();

            //ADDING MAIN MENU SERVICE ON THE SCOPE
            $scope.mainMenuService = MainMenuService;
        }

        $scope.openLeft = function(){
            if($scope.snapper.state().state == 'closed') $scope.snapper.open('left');
            if($scope.snapper.state().state == 'openned') $scope.snapper.close('left');
        };



    });

}());