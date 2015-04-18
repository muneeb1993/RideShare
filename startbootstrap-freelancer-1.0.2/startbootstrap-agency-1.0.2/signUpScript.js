Parse.initialize("EUXS2SHUYrUXfg2TpPTe1p6h8Au2Jm5VgKjZZfCF", "ertUipLEp6YApAS5HAdhoQZcPMO0D7TiEfg0oIGK");

function signUp(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var newUser = document.getElementById("newUser").value;
	var newPass = document.getElementById("newPass").value;
	var newPassConfirm = document.getElementById("newPassConfirm").value;
	
	if(firstName.length < 3){
		alert("First Name must be 3 characters or more");
		return;
	}

	if(lastName.length < 3){
		alert("Last Name must be 3 characters or more");
		return;
	}
	
	if(hasWhiteSpace(firstName) > 0){
		alert("There cannot be white space in the first name");
		return;
	}
	
	if(hasWhiteSpace(lastName) > 0){
		alert("There cannot be white space in the last name");
		return;
	}
	
	if(hasWhiteSpace(email) > 0){
		alert("There cannot be white space in the email");
		return;
	}
	
	if(hasWhiteSpace(newUser) > 0){
		alert("There cannot be white space in the username");
		return;
	}
	
	if(hasWhiteSpace(newPass) > 0){
		alert("There cannot be white space in the password");
		return;
	}
	
	if(newPass.length < 6){
		alert("Password has to be 6 characters or more");
		return;
	}
	
	if(newPass != newPassConfirm){
		alert("Passwords do not match");
		return;
	}
			
	var user = new Parse.User();
	user.set("username", newUser);
	user.set("password", newPass);
	user.set("email", email);
	user.set("firstName", firstName);
	user.set("lastName", lastName);
	
	user.signUp(null, {
	  success: function(user) {
		// Hooray! Let them use the app now.	
			// window.open("index.html", "_self");
		},
	  error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
	  }
	});
	
	var UserData = Parse.Object.extend("UserData");
	var userData = new UserData();
	
	userData.set("username",newUser);
	userData.set("firstName", firstName);
	userData.set("lastName", lastName);
	userData.set("email", email);
	userData.set("ratingTotal", 0);
	userData.set("ratingCount", 0);
	userData.set("rating", 0);
	userData.save(null, {
	  success: function(results) {
		// Execute any logic that should take place after the object is saved.
		alert("Successful!");
		// alert('New object created with objectId: ' + userData.id);
		window.open("index.html", "_self");
	  },
	  error: function(userData, error) {
		// Execute any logic that should take place if the save fails.
		// error is a Parse.Error with an error code and message.
		alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

function hasWhiteSpace(s) {
	return s.indexOf(' ') >= 0;
}
