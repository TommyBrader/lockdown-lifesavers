// Initial variables
const messageArea = document.querySelector('#message')
const fireButton = document.querySelector('#fire-button')
const guessInput = document.querySelector('#guess')

// Updating display
let view = {
  displayMessage: function(msg) {
    messageArea.textContent = msg
  },
  displayHit: function(location) {
    let cell = document.getElementById(location)
    cell.classList.add('hit')
    cell.textContent = 'H'
  },
  displayMiss: function(location) {
    let cell = document.getElementById(location)
    cell.classList.add('miss')
    cell.textContent = 'M'
  }
}

// Holds state of the game
let model = {
  boardSize: 8,
  numShips: 5,
  shipLength: 4,
  shipsSunk: 0,
  ships: [{locations: [0,0,0,0], hits: ['','','','']},
          {locations: [0,0,0,0], hits: ['','','','']},
          {locations: [0,0,0,0], hits: ['','','','']},
          {locations: [0,0,0,0], hits: ['','','','']},
          {locations: [0,0,0,0], hits: ['','','','']}],
  fire: function(guess) {
      for (let i = 0; i < this.numShips; i++) {
          let ship = this.ships[i]
          let index = ship.locations.indexOf(guess)
          if (index >= 0) {
              ship.hits[index] = 'hit'
              view.displayHit(guess)
              view.displayMessage('HIT!')
              if (this.isSunk(ship)) {
                  this.shipsSunk++
                  view.displayMessage(`You sank my battleship! ${this.numShips - this.shipsSunk} remaining`)
              }
              return true
          }
      }
      view.displayMiss(guess)
      view.displayMessage('You Missed')
      return false
  },
  isSunk: function(ship) {
      for (let i = 0; i < this.shipLength; i++)  {
          if (ship.hits[i] !== 'hit') {
              return false;
          }
      }
      return true;
  },
  generateShipLocations: function() {
      let locations
      for (let i = 0; i < this.numShips; i++) {
          do {
              locations = this.generateShip()
          } while (this.collision(locations))
          this.ships[i].locations = locations
      }
  },
  generateShip: function() {
      const direction = Math.floor(Math.random() * 2)
      let row
      let col
      if (direction === 1) {
          row = Math.floor(Math.random() * this.boardSize);
          col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1))
      } else {
          row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1))
          col = Math.floor(Math.random() * this.boardSize)
      }
      let newShipLocations = []
      for (let i = 0; i < this.shipLength; i++) {
          if (direction === 1) {
              newShipLocations.push(row + '' + (col + i))
          } else {
              newShipLocations.push((row + i) + '' + col)
          }
      }
      return newShipLocations
  },
  // Checks to see if the ships generated overlap
  collision: function(locations) {
      for (let i = 0; i < this.numShips; i++) {
          let ship = this.ships[i]
          for (let j = 0; j < locations.length; j++) {
              if (ship.locations.indexOf(locations[j]) >= 0) {
                  return true
              }
          }
      }
      return false;
  }
}

// Handles input and game logic
let controller = {
  guesses: 0,
  processGuess: function(guess) {
      let location = parseGuess(guess)
      if (location) {
          this.guesses++
          let hit = model.fire(location)
          if (hit && model.shipsSunk === model.numShips) {
            let score = (((model.numShips * model.shipLength)/(this.guesses)) * 100).toFixed(0)
            view.displayMessage(`You sank all my battleships in ${this.guesses} guesses. Score: ${score}%`)
          }
      }
  }
}

// Functions
// Validates and converts guesses
function parseGuess(guess) {
  const guessRow = guess.charAt(0).toUpperCase()
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  if (guess === null || guess.length !== 2) {
      alert('Please enter a letter and a number on the board.')
  } else {
      const row = alphabet.indexOf(guessRow)
      const column = guess.charAt(1);
      const cell = document.getElementById(row + column)
      
      if (isNaN(row) || isNaN(column)) {
          alert('Cell not on board, please try again');
      } else if (row < 0 || row >= model.boardSize ||
          column < 0 || column >= model.boardSize) {
          alert('Cell not on board, please try again');
      } else if (cell.textContent !== '') {
        alert('Cell already guessed, please choose a different one')
      } else {
          return row + column;
      }
  }
  return null
}

// Sets initial state of the board
function init() {
  fireButton.addEventListener('click', handleFireButton)
  guessInput.onkeydown = handleKeyPress
  model.generateShipLocations()
}

// Retrieves player guesses
function handleFireButton() {
  let guess = guessInput.value
  controller.processGuess(guess)
  guessInput.value = ''
}

// Lets user press enter instead of clicking the button every time
function handleKeyPress(e) {
  if (e.keyCode === 13) {
      fireButton.click()
      return false
  }
}

// window.onload = init
init()