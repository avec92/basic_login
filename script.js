// Declare (or Register, Create) an Angular module.
var app = angular.module('myApp', ['ngRoute','myDirectives']);

// ---------- Config route(s). ----------

// Inject $routeProvider dependency for routing.
app.config(['$routeProvider', function($routeProvider) {

  // Home 
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });
	//Wrapper
  $routeProvider.when('/log_in', {
    templateUrl: 'wrap.html',
    controller: 'validateCtrl'
  });
/*
  // Login
  $routeProvider.when('login', {
    templateUrl: 'login.html',
    //controller: 'validateCtrl'
  });

  //Output
  $routeProvider.when('/output', {
    templateUrl: 'output.html',
    //controller: 'validateCtrl'
  });
  */
  // Register
  $routeProvider.when('/register', {
    templateUrl: 'register.html',
    controller: 'RegisterController'
  });

  // Otherwise, redirect to Home
  $routeProvider.otherwise({redirectTo: '/'});
}]);