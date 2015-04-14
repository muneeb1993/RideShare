Parse.initialize("EUXS2SHUYrUXfg2TpPTe1p6h8Au2Jm5VgKjZZfCF", "ertUipLEp6YApAS5HAdhoQZcPMO0D7TiEfg0oIGK");

var currentUser = Parse.User.current();
if (currentUser) {	
	document.getElementById("logIn").innerHTML = "Log Out"; // Change the account settings button
	document.getElementById("logIn").onclick = function(){
		alert("Logged Out");
		Parse.User.logOut();
		window.open("index.html", "_self");
	}
} 
else{
	//If not signed in
}