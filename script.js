const container = document.querySelector('.container')
const clearButton = document.querySelector('.clear')
let gridSize = 256

// draw the canvas

function drawGrid () {
  for (let i = 0; i < gridSize; i++) {
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('containerUnit')
    container.appendChild(containerDiv)
  }
  document.querySelectorAll('.containerUnit').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('drawn')
    })
    const cellSize = 600 / Math.sqrt(gridSize)
    item.style.width = cellSize + 'px'
    item.style.height = cellSize + 'px'
  })
}

// undraw the canvas

function undrawGrid () {
  document.querySelectorAll('.containerUnit').forEach(item => {
    item.parentNode.removeChild(item)
  })
}

drawGrid()

clearButton.addEventListener('click', () => {
  document.querySelectorAll('.containerUnit').forEach(item => {
    item.classList.remove('drawn')
  })
  var gridWidth = window.prompt('Please enter resolution for new grid: ')
  gridSize = gridWidth * gridWidth
  undrawGrid()
  drawGrid()
})
