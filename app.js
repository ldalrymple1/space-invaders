// console.log('Hello World')

document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 10
  const squares = []
  
  for (let i = 0; i < width ** 2; i++) {
    const square = document.createElement('div')
    square.setAttribute('data-id', i)
  
    grid.appendChild(square)
    squares.push(square)
    square.classList.add('.div')
  }






})