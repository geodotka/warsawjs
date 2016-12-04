var $imgList = document.querySelectorAll('.image');
var $zoomContainer = document.querySelector('.zoom-container');


Array.from($imgList).forEach(function ($image) {
    $image.addEventListener('click', function (ev) {
        ev.preventDefault();
        var $imgWithBorder = document.querySelector('.img-with-border');
        if ($imgWithBorder) {
            $imgWithBorder.className = 'image';
        }
        $image.className = 'img-with-border';
        var newImg = document.createElement('img');
        newImg.src = $image.parentNode.href;
        $zoomContainer.innerHTML = '';
        $zoomContainer.appendChild(newImg)
    })
});
