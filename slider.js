var i = 0;
var images = [];
var time = 5000;

images[0] = 'homeimages/images - 2022-09-20T220227.748.jpeg';
images[1] = 'homeimages/images - 2022-09-20T220237.882.jpeg';
images[2] = 'homeimages/images - 2022-09-20T220246.041.jpeg';
images[3] = 'homeimages/images - 2022-09-20T220253.945.jpeg';
images[4] = 'homeimages/images - 2022-09-20T220334.804.jpeg'


function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	}else{
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;