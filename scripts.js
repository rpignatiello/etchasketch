window.onload = function() {
  const containerDiv = document.getElementsByClassName('containerDiv');
  const rowsArray = [];
  const divArray = [];

  for(let i = 0; i < gridSize; i++) {
    let counter = 0;
    rowsArray[i] = document.createElement('div');
    rowsArray[i].classList.add('row');
    containerDiv[0].appendChild(rowsArray[i]);

    for(let k = 0; k < gridSize; k++) {
      divArray[counter] = document.createElement('div');
      divArray[counter].classList.add('box');
      rowsArray[i].appendChild(divArray[counter++]);
    }
  }
    document.documentElement.style.setProperty('--boxsize', (90/gridSize)+ 'vmin');

    const boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(function(item) {
      item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'black';
      });
    })
};

const gridSize = prompt('How large should the grid be?');
