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
// if (currentUser) {	
	// document.getElementById("account1").innerHTML = currentUser.get("firstName") + " " + currentUser.get("lastName") ; // Change the account settings button
	// document.getElementById("account1").href = "account.html";
	
	// document.getElementById("account2").innerHTML = "Log Out"; // Change the account settings button
	// document.getElementById("account2").onclick = function(){
		// alert("Logged Out");
		// Parse.User.logOut();
		// window.open("index.html", "_self");
	// }
// } 
// else{
	// //If not signed in
	// document.getElementById("account1").innerHTML = "Log In"; // Change the account settings button to Log In
	// document.getElementById("account1").href = "login.html";
	
	// document.getElementById("account2").innerHTML = "Sign Up"; // Change the log out button to Create New
	// document.getElementById("account2").href = "signUp.html";
// }


function logIn(){
	alert("comes here");
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

