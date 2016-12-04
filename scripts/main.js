var $imgList = document.querySelectorAll('.image');
var $imageContainer = document.querySelector('.image-container');
var imgArray = Array.from($imgList);
var currentIndex = 0;


imgArray.forEach(function ($image) {
    $image.addEventListener('click', function (ev) {
        ev.preventDefault();
        showPreviewContainer();
        previewImage($image);
        document.addEventListener('keydown', bindArrows)
    })
});


function bindArrows(ev) {
    if (ev.keyCode == 39) {
        previewNextImage();
    } else if (ev.keyCode == 37) {
        previewPrevImage()
    }
}


function previewImage($image) {
    currentIndex = imgArray.indexOf($image);
    setImageBorder($image);
    createImageWidget($image);
}


function previewPrevImage() {
    var $prevImage = getPrevImage();
    previewImage($prevImage)
}


function previewNextImage() {
    var $nextImage = getNextImage();
    previewImage($nextImage)
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


function showPreviewContainer() {
    document.querySelector('.zoom-container').parentNode.className = 'preview-container';
}


function hidePreviewContainer() {
    document.querySelector('.zoom-container').parentNode.className = 'empty-preview-container';
}


document.querySelector('.arrow-left').addEventListener('click', function(){
    previewPrevImage();
});


document.querySelector('.arrow-right').addEventListener('click', function(){
    previewNextImage();
});


document.querySelector('.close-preview').addEventListener('click', function(){
    hidePreviewContainer();
    document.removeEventListener('keydown', bindArrows);
});
