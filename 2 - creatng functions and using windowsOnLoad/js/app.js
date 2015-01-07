function myfunction(){
	var buttton = document.getElementById('button');
	buttton.onclick = function(){
		alert("You have clicked the buttton");
	}
}

window.onload = function(){
	myfunction();
}

