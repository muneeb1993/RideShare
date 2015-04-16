Parse.initialize("EUXS2SHUYrUXfg2TpPTe1p6h8Au2Jm5VgKjZZfCF", "ertUipLEp6YApAS5HAdhoQZcPMO0D7TiEfg0oIGK");

// document.onkeydown = function (evt) {
  // var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  // if (keyCode == 13) {
    // // For Enter.
	// logIn();
  // }
  // else {
    // return true;
  // }
// };

// For making sure the account buttons are right
var currentUser = Parse.User.current();

function logIn(){
	var userName = document.getElementById("user").value;
	var password = document.getElementById("pass").value;
	Parse.User.logIn(userName, password, {
	success: function(user) {
		//alert("success");
		
		window.open("index.html", "_self");
	// Do stuff after successful login.
	},
	error: function(user, error) {
	// The login failed. Check error to see why.
		alert("Incorrect credentials");
		return;
	}
	});	
}

function signUp(){
	window.open("signUp.html", "_self");
}