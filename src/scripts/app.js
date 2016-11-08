
// var myApp = angular.module('myApp', ['ngRoute','app-ctrl']);
// myApp.config(['$routeProvider', function($routeProvider){
//   $routeProvider
//     .when('/home', {
//       templateUrl: '/src/scripts/tpls/home.html',
//       controller: 'homeCtrl'
//     })
//     .otherwise({
//       redirectTo: '/home'
//     })
// }]);
var myApp = angular.module('myApp', ['ui.router','app-ctrl']);
myApp.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/home/searchStudentInfo');
});

myApp.config(function($urlMatcherFactoryProvider){
  $urlMatcherFactoryProvider.caseInsensitive(false);
});

myApp.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: '/src/scripts/tpls/home.html',
      controller: 'homeCtrl'
    })
    .state('home.searchStudentInfo', {
      url:'/searchStudentInfo',
      templateUrl: '/src/scripts/tpls/searchstudentinfo.html',
      controller: 'searchuserinfoCtrl'
    })
    .state('home.changeStudentInfo', {
      url:'/changeStudentInfo',
      templateUrl: '/src/scripts/tpls/changeuserinfo.html',
      controller: 'searchuserinfoCtrl'
    })
    .state('home.searchchengjiInfo', {
      url:'/searchchengjiInfo',
      templateUrl: '/src/scripts/tpls/searchchengjiinfo.html',
      controller: 'chengjiinfoCtrl'
    })
    .state('home.changechengjiInfo', {
      url:'/changechengjiInfo',
      templateUrl: '/src/scripts/tpls/changechengjiinfo.html',
      controller: 'chengjiinfoCtrl'
    })
    .state('home.searchxuankeInfo', {
      url:'/searchxuankeInfo',
      templateUrl: '/src/scripts/tpls/searchxuanke.html',
      controller: 'xuankeinfoCtrl'
    })
    .state('home.changexuankeInfo', {
      url:'/changexuankeInfo/:pro',
      templateUrl: '/src/scripts/tpls/changexuankeinfo.html',
      controller: 'xuankeinfoCtrl'
    })
    .state('home.xuankedetail', {
      url:'/xuankedetail/:id',
      templateUrl: '/src/scripts/tpls/detail.html',
      controller: 'detailCtrl'
    })
}]);
