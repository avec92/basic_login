// ---------- Controller(s). ----------

// HomeCotnroller
app.controller('HomeController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'Welcome to Demo!';
}]);

	
// RegisterCotnroller
app.controller('RegisterController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'This is a register page.';
}]);


// LoginController
app.controller('validateCtrl', function($scope,$http,$window,$location) {	
     

		
	// Storing user details
	$scope.user={
				uId:0,
				password:0
			}
	
			// Constructing  a JSON
		function myJSON(){
			var finalJSON={};
			var pl={};
			var u_id={};
			u_id.id=$scope.user.uId;
			u_id.type=2;    //defines the type of data entered, 2 stands for email.
			pl.u_id=u_id;
			pl.pswd=$scope.user.password;
			finalJSON={pl};
			var param=JSON.stringify(finalJSON); // param contains all the user information in a JSON format
			return param;
		}
		
			// Calling HTTP response
		function myHTTP(param){
				$http({
					method : "POST",
					headers: {'Content-Type': 'application/json'},
					url : "http://tusker-dev.logistimo.com/tusker-service/auth/tokens",
					data: param
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages						
						$scope.status = response.status;	  
						 $scope.expiry=response.data.pl.tkn;
						 $scope.token=response.data.pl.tkn;							
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						$scope.status = response.status;
						 $scope.errorMsg= response.data.msg;
					});
		}	   

	
		// function calling all other functions
   $scope.parameters = function() {
			myHTTP(myJSON()); //calling service function and creating JSON
			$scope.template ='html/output.html';
		}
});

//Directive creation for login page
var myDirectives = angular.module('myDirectives', []);

	myDirectives.directive('myUser', function() {
	  return {
		restrict: 'AE',
		scope: false, // This indicates the scope to be false, leading to no confliction in passing of data from directive to controller
		templateUrl: 'html/logger.html'  // This calls the html file logger
	  };
	});