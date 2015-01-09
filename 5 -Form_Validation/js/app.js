var form = document.getElementById("form");

function load(){
	form.onsubmit = function() {
		if(document.getElementById('email').value == "" || document.getElementById('address').value == ""
				|| document.getElementById('name').value ==""){
			document.getElementById('error').innerHTML = "Please enter your details";
			return false;
		}
		// if else(document.getElementById('name').value ==""){
		// 	document.getElementById('error')..innerHTML = "Please enter your name";
		// 	return false;
		// }
		// if else(document.getElementById('address').value == ""){
		// 	document.getElementById('error').innerHTML = "Please enter your address";
		// 	return false;
		// }
		else{
			document.getElementById('error').innerHTML ="";
			return true;
		}
	}
}
// window.onload = function(){
// 	load();
// }
load();