var newHeading = document.createElement("h2");
var newParagraph = document.createElement("p");

// newHeading.innerHTML = "what to do?";
// newParagraph.innerHTML = "Go to work";

var h1Text = document.createTextNode("What to do?");
var pText = document.createTextNode("Go to work");
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

document.getElementById("temp").appendChild(newHeading);
document.getElementById("temp").appendChild(newParagraph);