// window.onload = function(){
// 	//creating the inputminutes text Box
// 	var inputMin = document.createElement("input");
// 	inputMin.setAttribute('id','inputMin');
// 	inputMin.setAttribute('type','text');
// 	//creating the submit button
// 	var btn = document.createElement('input');
// 	btn.setAttribute('type','submit');
// 	btn.setAttribute('id','submit');
// 	btn.setAttribute('value','Start');

// 	document.getElementById('form').appendChild(inputMin);
// 	document.getElementById('form').appendChild(btn);

	
// 	document.getElementById('form').onsubmit = function() {		
// 		function countDown(){
// 			var minutes = document.getElementById('inputMin').value;
// 			if(isNaN(minutes)) {
// 				alert("Please Enter a number...");
// 				return;
// 			}
// 			var seconds = parseFloat(minutes * 60);
// 			seconds--;
// 			return seconds;
// 		}
// 		var tick = setInterval(countDown,2000);

// 		document.getElementById('time').innerHTML = tick.toString();
// 	}	
// }




var intervalHandle;

window.onload = function () {
    //creating the inputminutes text Box
    var inputMin = document.createElement("input");
    inputMin.setAttribute('id', 'inputMin');
    inputMin.setAttribute('type', 'text');
    //creating the submit button
    var btn = document.createElement('input');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('id', 'submit');
    btn.setAttribute('value', 'Start');

    document.getElementById('form').appendChild(inputMin);
    document.getElementById('form').appendChild(btn);


    document.getElementById('form').onsubmit = function () {
       intervalHandle = setTimeout(countDown, 2000);
    }
}
function countDown() {
    var minutes = document.getElementById('inputMin').value;
    if (isNaN(minutes)) {
        alert("Please Enter a number...");
        if (intervalHandle) {
            clearInterval(intervalHandle);
        }
        return;
    }
    var seconds = parseFloat(minutes * 60);
    seconds--;
    document.getElementById('time').innerHTML = seconds;

}
