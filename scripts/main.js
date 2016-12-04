var $imgList = document.querySelectorAll('.image');
var $imageContainer = document.querySelector('.image-container');
var imgArray = Array.from($imgList);
var currentIndex = 0;


imgArray.forEach(function ($image) {
    $image.addEventListener('click', function (ev) {
        ev.preventDefault();
        document.querySelector('.zoom-container').parentNode.className = 'preview-container';
        previewImage($image);
    })
});


function previewImage($image) {
    currentIndex = imgArray.indexOf($image);
    setImageBorder($image);
    createImageWidget($image);
}


function setImageBorder($image){
    var $imgWithBorder = document.querySelector('.img-with-border');
    if ($imgWithBorder) {
        $imgWithBorder.className = 'image';
    }
    $image.className = 'img-with-border';
}


function createImageWidget($image){
    $imageContainer.innerHTML = '';
    var newImg = document.createElement('img');
    newImg.src = $image.parentNode.href;
    $imageContainer.appendChild(newImg);
}


function getPrevImage() {
    if (currentIndex == 0){
        return imgArray[imgArray.length - 1]
    }
    return imgArray[--currentIndex]
}


function getNextImage() {
    if (currentIndex == imgArray.length - 1){
        return imgArray[0]
    }
    return imgArray[++currentIndex]
}


document.querySelector('.arrow-left').addEventListener('click', function(){
    var $prevImage = getPrevImage();
    previewImage($prevImage)
});


document.querySelector('.arrow-right').addEventListener('click', function(){
    var $nextImage = getNextImage();
    previewImage($nextImage)
});


document.querySelector('.close-preview').addEventListener('click', function(){
    document.querySelector('.zoom-container').parentNode.className = 'empty-preview-container';
});
