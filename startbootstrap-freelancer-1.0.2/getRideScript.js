Parse.initialize("EUXS2SHUYrUXfg2TpPTe1p6h8Au2Jm5VgKjZZfCF", "ertUipLEp6YApAS5HAdhoQZcPMO0D7TiEfg0oIGK");

alert("Get ride page");

var table = document.getElementById("rideResults");

var Rides = Parse.Object.extend("Ride");
var query = new Parse.Query(Rides);
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length);
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
	  var rowRace = table.insertRow(table.length);
	  
		var object = results[i];
		var cell0 = rowRace.insertCell(0);
		var cell1 = rowRace.insertCell(1);

		cell0.innerHTML = object.get("from");
		cell1.innerHTML = object.get("to");
		
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});


function searchRides(){
	
	var table = document.getElementById("rideResults");
	//or use :  var table = document.all.tableid;
	for(var i = table.rows.length - 1; i > 0; i--)
	{
		table.deleteRow(i);
	}
	
	var Rides = Parse.Object.extend("Ride");
	var query = new Parse.Query(Rides);
	query.equalTo("from", document.getElementById("fromCity").value);
	query.equalTo("to", document.getElementById("toCity").value);
	query.find({
	  success: function(results) {
		// Do something with the returned Parse.Object values
		for (var i = 0; i < results.length; i++) { 
		  var rowRace = table.insertRow(table.length);
		  
			var object = results[i];
			var cell0 = rowRace.insertCell(0);
			var cell1 = rowRace.insertCell(1);

			cell0.innerHTML = object.get("from");
			cell1.innerHTML = object.get("to");
			
		}
	  },
	  error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	  }
	});

}

