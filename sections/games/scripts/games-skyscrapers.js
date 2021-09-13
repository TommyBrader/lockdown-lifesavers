const clue = document.querySelectorAll('.clue')
const topClue = {0: clue[0], 1: clue[1], 2: clue[2], 3: clue[3]}
const leftClue = {0: clue[4], 1: clue[6], 2: clue[8], 3: clue[10]}
const rightClue = {0: clue[5], 1: clue[7], 2: clue[9], 3: clue[11]}
const bottomClue = {0: clue[12], 1: clue[13], 2: clue[14], 3: clue[15]}

const messageArea = document.querySelector('#message')
const submitAttempt = document.querySelector('#submit-button')

let numOfAttempts = 0
let index

// Grids
const grids = [
  {
    top: [2,3,1,2],
    left: [3,1,2,2],
    right: [2,3,3,1],
    bottom: [2,2,3,1]
  },
  {
    top: [3,2,1,3],
    left: [3,2,4,1],
    right: [2,2,1,2],
    bottom: [1,3,3,2]
  },
  {
    top: [2,2,4,1],
    left: [2,1,2,3],
    right: [1,2,3,2],
    bottom: [2,2,1,4]
  },
]

// Solution Variables
let t0l0 = [1,2,3,4]
let t0l1 = [1,2,3,4]
let t0l2 = [1,2,3,4]
let t0l3 = [1,2,3,4]

let t1l0 = [1,2,3,4]
let t1l1 = [1,2,3,4]
let t1l2 = [1,2,3,4]
let t1l3 = [1,2,3,4]

let t2l0 = [1,2,3,4]
let t2l1 = [1,2,3,4]
let t2l2 = [1,2,3,4]
let t2l3 = [1,2,3,4]

let t3l0 = [1,2,3,4]
let t3l1 = [1,2,3,4]
let t3l2 = [1,2,3,4]
let t3l3 = [1,2,3,4]

let firstSolutionRow = [t0l0, t0l1, t0l2, t0l3]
let secondSolutionRow = [t1l0, t1l1, t1l2, t1l3]
let thirdSolutionRow = [t2l0, t2l1, t2l2, t2l3]
let fourthSolutionRow = [t3l0, t3l1, t3l2, t3l3]

let firstSolutionColumn = [t0l0, t1l0, t2l0, t3l0]
let secondSolutionColumn = [t0l1, t1l1, t2l1, t3l1]
let thirdSolutionColumn = [t0l2, t1l2, t2l2, t3l2]
let fourthSolutionColumn = [t0l3, t1l3, t2l3, t3l3]

let solution = [firstSolutionRow, secondSolutionRow, thirdSolutionRow, fourthSolutionRow]

function generateClues() {
  const randomNumber = Math.floor(Math.random() * grids.length)
  const gridSelected = grids[randomNumber]
  for (let i = 0; i < 4; i++) {
    topClue[i].textContent = gridSelected.top[i]
    leftClue[i].textContent = gridSelected.left[i]
    rightClue[i].textContent = gridSelected.right[i]
    bottomClue[i].textContent = gridSelected.bottom[i]
  }

  // for (let i = 0; i<gridSize; i++) {
  //   // Generates top clues at random
  //   topClue[i].textContent = Math.floor(Math.random() * gridSize) + 1
  //   // Generates bottom clues based off top clues
  //   if (topClue[i].textContent == 4) {
  //     bottomClue[i].textContent = 1
  //   } else if (topClue[i].textContent == 2 || topClue[i].textContent == 3) {
  //     bottomClue[i].textContent = Math.floor(Math.random() * (gridSize - 1)) + 1
  //   } else if (topClue[i].textContent == 1) {
  //     bottomClue[i].textContent = Math.floor(Math.random() * (gridSize - 1)) + 2
  //   } else {
  //     messageArea.textContent = 'There was an error loading your puzzle, please refresh the page'
  //   }
  // }


  // if (topClue[0].textContent == 1) {
  //   leftClue[0].textContent = 1
  // }
  // if (bottomClue[3].textContent == 1) {
  //   rightClue[3].textContent = 1
  // }
  // if (topClue[3].textContent == 1) {
  //   rightClue[0].textContent = 1
  // }
  // if (bottomClue[0].textContent == 1) {
  //   leftClue[3].textContent = 1
  // }

  for (let i=0; i<4; i++) {
    // If clue is 4
    if (topClue[i].textContent == 4) {
      index = firstSolutionRow[i].indexOf(2)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(3)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(4)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}

      index = secondSolutionRow[i].indexOf(1)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}
      index = secondSolutionRow[i].indexOf(3)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}
      index = secondSolutionRow[i].indexOf(4)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}

      index = thirdSolutionRow[i].indexOf(1)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}
      index = thirdSolutionRow[i].indexOf(2)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}
      index = thirdSolutionRow[i].indexOf(4)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}

      index = fourthSolutionRow[i].indexOf(1)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(2)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(3)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
    }
    if (leftClue[i].textContent == 4) {
      index = firstSolutionColumn[i].indexOf(2)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(3)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(4)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}

      index = secondSolutionColumn[i].indexOf(1)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}
      index = secondSolutionColumn[i].indexOf(3)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}
      index = secondSolutionColumn[i].indexOf(4)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}

      index = thirdSolutionColumn[i].indexOf(1)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}
      index = thirdSolutionColumn[i].indexOf(2)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}
      index = thirdSolutionColumn[i].indexOf(4)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}

      index = fourthSolutionColumn[i].indexOf(1)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(2)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(3)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
    }
    if (rightClue[i].textContent == 4) {
      index = firstSolutionColumn[i].indexOf(1)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(2)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(3)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}

      index = secondSolutionColumn[i].indexOf(1)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}
      index = secondSolutionColumn[i].indexOf(2)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}
      index = secondSolutionColumn[i].indexOf(4)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}

      index = thirdSolutionColumn[i].indexOf(1)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}
      index = thirdSolutionColumn[i].indexOf(3)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}
      index = thirdSolutionColumn[i].indexOf(4)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}

      index = fourthSolutionColumn[i].indexOf(2)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(3)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(4)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
    }
    if (bottomClue[i].textContent == 4) {
      index = firstSolutionRow[i].indexOf(1)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(2)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(3)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}

      index = secondSolutionRow[i].indexOf(1)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}
      index = secondSolutionRow[i].indexOf(2)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}
      index = secondSolutionRow[i].indexOf(4)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}

      index = thirdSolutionRow[i].indexOf(1)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}
      index = thirdSolutionRow[i].indexOf(3)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}
      index = thirdSolutionRow[i].indexOf(4)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}

      index = fourthSolutionRow[i].indexOf(2)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(3)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(4)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
    }

    // If Clue is 1
    if (topClue[i].textContent == 1) {
      index = firstSolutionRow[i].indexOf(1)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(2)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(3)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
    }
    if (leftClue[i].textContent == 1) {
      index = firstSolutionColumn[i].indexOf(1)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(2)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(3)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
    }
    if (rightClue[i].textContent == 1) {
      index = fourthSolutionColumn[i].indexOf(1)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(2)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(3)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
    }
    if (bottomClue[i].textContent == 1) {
      index = fourthSolutionRow[i].indexOf(1)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(2)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(3)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
    }
  }

  console.log(solution)
}

// Click Submit Attempt
submitAttempt.addEventListener('click', submitClicked)

function submitClicked(event) {
  event.preventDefault()
  const inputGuess = document.querySelectorAll('.guess-input')
  messageArea.textContent = ''
  let checkGuess = true
  inputGuess.forEach(guess => {
    if (guess.value == '') {
      messageArea.textContent = 'You must fill in all cells before guessing'
      checkGuess = false
    } else if (guess.value != 1 && guess.value != 2 && guess.value != 3 && guess.value != 4) {
      messageArea.textContent = 'You may only enter integers 1 to 4 as part of your guess'
      checkGuess = false
    }
  })
  if (checkGuess) {
    const firstRowInput = [[inputGuess[0]], [inputGuess[1]], [inputGuess[2]], [inputGuess[3]]]
    const secondRowInput = [[inputGuess[4]], [inputGuess[5]], [inputGuess[6]], [inputGuess[7]]]
    const thirdRowInput = [[inputGuess[8]], [inputGuess[9]], [inputGuess[10]], [inputGuess[11]]]
    const fourthRowInput = [[inputGuess[12]], [inputGuess[13]], [inputGuess[14]], [inputGuess[15]]]

    // const firstColumnInput = {0: inputGuess[0], 1: inputGuess[4], 2: inputGuess[8], 3: inputGuess[12]}
    // const secondColumnInput = {0: inputGuess[1], 1: inputGuess[5], 2: inputGuess[9], 3: inputGuess[13]}
    // const thirdColumnInput = {0: inputGuess[2], 1: inputGuess[6], 2: inputGuess[10], 3: inputGuess[14]}
    // const fourthColumnInput = {0: inputGuess[3], 1: inputGuess[7], 2: inputGuess[11], 3: inputGuess[15]}

    const fullGuess = [firstRowInput, secondRowInput, thirdRowInput, fourthRowInput]
  }
  numOfAttempts++
}

generateClues()