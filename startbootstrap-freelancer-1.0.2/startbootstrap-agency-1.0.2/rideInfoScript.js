var query = window.location.search;
if (query.substring(0, 1) == '?') {
	query = query.substring(1);
}
var data = unescape(query);

if(data == ""){
	window.open("index.html", "_self");
}
// alert("data: " + data);

var from = "";
var to = "";
var email = "";
var firstName = "";
var lastName = "";
var price = "";

var counter = 0;

while(counter < 1000){
	if(data[counter] === "-"){
		counter++;
		break;
	}
	from += data[counter];
	counter++;
}

while(counter < 1000){
	if(data[counter] === "-"){
		counter++;
		break;
	}
	to += data[counter];
	counter++;
}

while(counter < 1000){
	if(data[counter] === "-"){
		counter++;
		break;
	}
	email += data[counter];
	counter++;
}

while(counter < 1000){
	if(data[counter] === "-"){
		counter++;
		break;
	}
	firstName += data[counter];
	counter++;
}

while(counter < 1000){
	if(data[counter] === "-"){
		counter++;
		break;
	}
	lastName += data[counter];
	counter++;
}

while(counter < 1000){
	if(data[counter] === "-"){
		counter++;
		break;
	}
	price += data[counter];
	counter++;
}

// alert("from: " + from);
// alert("to: " + to);
// alert("email: " + email);
// alert("firstName: " + firstName);
// alert("lastName: " + lastName);
// alert("price: " + price);

document.getElementById("fromLoc").innerHTML += from;
document.getElementById("toLoc").innerHTML += to;
document.getElementById("name").innerHTML += firstName + " " + lastName;
document.getElementById("email").innerHTML += email;
document.getElementById("price").innerHTML += price;




