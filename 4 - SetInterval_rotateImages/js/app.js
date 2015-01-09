var img = document.getElementById('image');

var imgArr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg',
				'images/8.jpg','images/9.jpg'];

var index = 1;

function rotateImages(){
	img.setAttribute("src",imgArr[index]);
	index++;
	if(index >= imgArr.length)
		index = 0;
}

setInterval(rotateImages,2000);