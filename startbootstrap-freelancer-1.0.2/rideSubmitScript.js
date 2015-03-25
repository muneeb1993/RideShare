Parse.initialize("EUXS2SHUYrUXfg2TpPTe1p6h8Au2Jm5VgKjZZfCF", "ertUipLEp6YApAS5HAdhoQZcPMO0D7TiEfg0oIGK");

alert("hi")

function submitBtn(){
	
	
	alert("called submit function");
	
	
	
	
	var currentUser = Parse.User.current();
	
	if(currentUser){
	}
	else{
		alert("please log in");
		
		return;
	}

	var Ride = Parse.Object.extend("Ride");
	var ride = new Ride();
	
	alert("Comes here2");	
	
	
	ride.set("username",currentUser.get("username"));
	ride.set("from",document.getElementById("from").value);
	ride.set("to",document.getElementById("to").value);
	ride.set("isDriver",true);
	
	// ride.set("price",document.getElementById("price").value); // Price
	
	var rideDate = new Date();
	// rideDate = document.getElementById("date");
	
	ride.set("date",rideDate); // Date
	alert("reaches here");
	
	ride.save(null, {
	  success: function(results) {
		// Execute any logic that should take place after the object is saved.
		alert("succesful!");
		// alert('New object created with objectId: ' + userData.id);
	  },
	  error: function(results, error) {
		// Execute any logic that should take place if the save fails.
		// error is a Parse.Error with an error code and message.
		alert('Failed to create new object, with error code: ' + error.message);
	  }
	});	
}
