myApp.factory('Authentication',['$rootScope','$firebaseObject','$location','$firebaseAuth',function($rootScope,$firebaseObject,$location,$firebaseAuth){
	var ref=firebase.database().ref();
	var auth=$firebaseAuth();
	auth.$onAuthStateChanged(function(authUser){
		if(authUser){
			var userRef= ref.child('users').child(authUser.uid);
			var userObj=$firebaseObject(userRef);
			$rootScope.currentUser=userObj;
		}else{
			$rootScope.currentUser='';
		}
	});
	return{
		login: function(user){
			/*$rootScope.message="Welcome "+$rootScope.user.email;*/
			auth.$signInWithEmailAndPassword(
				user.email,
				user.password	
			).then(function(user){
				$location.path('/success');
			}).catch(function(error){
				$rootScope.message=error.message;
			});//signInWitEmailAndPassword
		},//login
		logout: function(){
			auth.$signOut();
		},//logout
		register: function(user){
			auth.$createUserWithEmailAndPassword(
			user.email,user.password	
			).then(function(regUser){
				var regRef=ref.child('users')
				.child(regUser.uid).set({
					date: firebase.database.ServerValue.TIMESTAMP,
					regUser: regUser.uid,
					firstname: user.firstname,
					lastname: user.lastname,
					emai: user.email
				});
				$rootScope.message="Hi "+user.firstname+", Thanks for registering";
			}).catch(function(error){
				$rootScope.message=error.message;
			});//createUserWithEmailAndPassword
		}//register	
	};//return
}]);