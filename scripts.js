let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(function(item) {
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = 'black';
  });
});
