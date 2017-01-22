function preload(images) {
    var imageArray = images.split(','),
    	length = imageArray.length - 1,
        arrayImages = [];

    for (var i = 0; i <= imageArray.length - 1; i++) {
        var imageObj = new Image();

        imageObj.src = imageArray[i];

        imageObj.onload = function(event) {
            console.log(event);
        	arrayImages.push(this);
            if (length) {
                length--;
            } else {          	
                insert(arrayImages);
            }

        }

    };
};


function insert(image) {
    for (var i = 0; i < image.length; i++) {
        document.body.appendChild(image[i]);
    }
}
