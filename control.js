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
			var param=JSON.stringify(finalJSON);
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
						 $scope.status = response.status;	  
						 $scope.expiry=response.data.pl.tkn;
						 $scope.token=response.data.pl.tkn;
				         alert("aaaaaaa");
							
					}).catch(function error(response) {           //function for taking actions when response is an error.
						 $scope.status = response.status;
						 $scope.errorMsg= response.data.msg;
                         $scope.template ='output.html';						 
					});
		}	   

	
		// function calling all other functions
   $scope.parameters = function() {
			myHTTP(myJSON());
			//document.getElementById("log").style.display="none";
			//document.getElementById("display").style.display="visible";
			$scope.template ='output.html';
			//$window.location.href="#/output";
		}
});

var myDirectives = angular.module('myDirectives', []);

myDirectives.directive('myUser', function() {
  return {
	restrict: 'AE',
	scope: false,
    templateUrl: 'logger.html'
  };
});