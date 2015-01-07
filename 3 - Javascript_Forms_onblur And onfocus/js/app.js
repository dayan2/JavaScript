var address = document.getElementById("address");
var name = document.getElementById("name");
var city = document.getElementById("city");

address.onblur = function(){
	if(address.value == ""){
		address.value = "Your Email";
	}
}

address.onfocus = function(){
	if(address.value == "Your Email"){
		address.value = "";
	}
}

name.onblur = function(){
	if(name.value = ""){
		name.value = "Your name";
	}
}
name.onfocus = function(){
	if(name.value = "Your name")
		name.value = "";
}

city.onblur = function(){
	if(city.value == "")
		city.value = "Your city";
}
city.onfocus = function(){
	if(city.value == "Your city")
		city.value = "";
}
