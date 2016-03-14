// Declare (or Register, Create) an Angular module.
var app = angular.module('myApp', ['ngRoute','myDirectives']);

// ---------- Config route(s). ----------

// Inject $routeProvider dependency for routing.
app.config(['$routeProvider', function($routeProvider) {

  // Home 
  $routeProvider.when('/', {
    templateUrl: 'html/home.html',
    controller: 'HomeController' //controller for home page
  });
	//Wrapper
  $routeProvider.when('/log_in', {
    templateUrl: 'html/wrap.html',
    controller: 'validateCtrl'   //controller for login page
  });
  // Register
  $routeProvider.when('/register', {
    templateUrl: 'html/register.html',
    controller: 'RegisterController'         //controller for register page
  });

  // Otherwise, redirect to Home
  $routeProvider.otherwise({redirectTo: '/'});
}]);