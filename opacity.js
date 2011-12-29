OpacityMap = {};

OpacityMap.setOpacityMap = function(canvas, img, map){
	pixs = this.getPixels(img);
	mask = this.getMap(map).data;
	for(i=3;i<mask.length;i+=4){
		pixs.data[i] = mask[i-1];
	}
	newimg = this.getCanvas(canvas, img.width, img.height);
	context = newimg.getContext('2d');
	context.putImageData(pixs, 0, 0);
};

OpacityMap.getPixels = function(imgsrc){
	var imag = new Image();
	imag.src = imgsrc;
	var canvas = document.createElement('canvas');
	canvas.width = imag.width;
	canvas.height = imag.height;
	var context = canvas.getContext('2d');
	context.drawImage(imag, 0, 0);
	return context.getImageData(0, 0, imag.width, imag.height);
};

OpacityMap.getMap = function (img){
	var map = new Image();
	map.src = img;
	var canvas = document.createElement('canvas');
	canvas.width = map.width;
	canvas.height = map.height;
	var context = canvas.getContext('2d');
	context.drawImage(map, 0, 0);
	return context.getImageData(0, 0, map.width, map.height);
};

OpacityMap.getCanvas = function(canv, w, h){
	var canvas = document.getElementById(canv);
	return canvas;
};