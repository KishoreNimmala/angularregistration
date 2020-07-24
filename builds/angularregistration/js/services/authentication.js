myApp.factory('Authentication',['$rootScope','firebase','$firebaseAuth',function($rootScope,$firebase,$firebaseAuth){
	var ref=firebase.database().ref();
	var auth=$firebaseAuth();
	return{
		login: function(user){
			$rootScope.message="Welcome "+$rootScope.user.email;
		},
		register: function(user){
			anut.$createUserWithEmailAndPassword(
			user.email,user.password	
			).then(function(regUser){
				$rootScope.message="Hi "+user.firstname+", Thanks for registering";
			}).catch(function(error){
				$rootScope.message=error.message;
			})
		}	
	};
}]);