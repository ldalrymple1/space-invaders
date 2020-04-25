// console.log('Hello World')

document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 10
  const squares = []
  let playerIndex = 95

  
  for (let i = 0; i < width ** 2; i++) {
    const square = document.createElement('div')
    square.setAttribute('square-id', i)
  
    grid.appendChild(square)
    squares.push(square)
    square.classList.add('.div')
  }

  function setUp() {
    console.log(squares)
    squares.forEach((elem, i) => {
      if (i === playerIndex) {
        elem.classList.add('player')
      }
      if (i >= 0 && i <= 29) {
        elem.classList.add('alien')
      }

    })
  }

  setUp()


  document.addEventListener('keyup', (e) => {
    
    // function movePlayer(event) {
    //   console.log('working')
    //   let x = event.keyCode
    //   if (x === 38) {
    //     console.log('38')
    //     return playerIndex -= width
    //   }
    // }
  
    // setUp()
    // movePlayer()
  


  })

  









})