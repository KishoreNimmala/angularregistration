myApp.controller('RegistrationController',
	['$scope','$firebase','$firebaseAuth',function($scope,$firebase,$firebaseAuth){
	var regRef=firebase.database().ref().child('angular');	
	var auth=$firebaseAuth();	
	$scope.login=function(){
		$scope.message="Welcome "+$scope.user.email;
	};
	$scope.register=function(){
		auth.$createUserWithEmailAndPassword(
			$scope.user.email,
			$scope.user.password
		).then(function(regUser){
			$scope.message="Hi "+$scope.user.firstname+", Thanks for registering.";
		}).catch(function(error){
			$scope.message=error.message;
		});
	};
}]);