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
	alert("You must be logged in to submit a ride.")
}

function submitBtn(){
	var currentUser = Parse.User.current();
	
	if(currentUser){
	}
	else{
		alert("please log in");
		
		return;
	}

	var Ride = Parse.Object.extend("Ride");
	var ride = new Ride();
	
	ride.set("firstName",currentUser.get("firstName"));
	ride.set("lastName",currentUser.get("lastName"));
	ride.set("email",currentUser.get("email"));
	
	ride.set("username",currentUser.get("username"));
	ride.set("from",document.getElementById("from").value);
	ride.set("to",document.getElementById("to").value);
	ride.set("isDriver",true);
	
	var ridePrice = document.getElementById("price").value;
	var priceNumber = Number(ridePrice);
	// return;
	ride.set("price",priceNumber); // Price
	
	var dateString = document.getElementById("date").value;
	var date = new Date(dateString);
	
	ride.set("date",date);
	
	ride.save(null, {
	  success: function(results) {
		alert("Ride Saved");
		window.open("index.html", "_self");
	  },
	  error: function(results, error) {
		// error is a Parse.Error with an error code and message.
		alert('Failed to create new object, with error code: ' + error.message);
	  }
	});	
}
