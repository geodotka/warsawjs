var title = document.getElementById('title');
var content = document.getElementById('content');
var printerTitle = document.getElementById('printer-title');
var printerContent = document.getElementById('printer-content');

title.addEventListener('keyup', function(ev) {
    printerTitle.innerHTML = title.value
});

content.addEventListener('keyup', function(ev) {
    printerContent.innerHTML = content.value
});

