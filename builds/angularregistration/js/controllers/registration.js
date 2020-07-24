myApp.controller('RegistrationController',
	['$scope','Authentication',function($scope,Authentication){
	/*var ref=firebase.database().ref();
	var auth=$firebaseAuth();*/

	$scope.login=function(){
		/*$scope.message="Welcome "+$scope.user.email;*/
		Authentication.login($scope.user);
	};
	$scope.register=function(){
		Authentication.register($scope.user);
		/*auth.$createUserWithEmailAndPassword($scope.user.emil,$scope.user.password)
		.then(function(regUser){
			$scope.message="Hi "+$scope.user.firstname+", Thanks for registring";
		}).catch(function(error){
			$scope.message=error.message;
		});*/
	};
}]);