const clue = document.querySelectorAll('.clue')
const topClue = {0: clue[0], 1: clue[1], 2: clue[2], 3: clue[3]}
const leftClue = {0: clue[4], 1: clue[6], 2: clue[8], 3: clue[10]}
const rightClue = {0: clue[5], 1: clue[7], 2: clue[9], 3: clue[11]}
const bottomClue = {0: clue[12], 1: clue[13], 2: clue[14], 3: clue[15]}

const messageArea = document.querySelector('#message')
const submitAttempt = document.querySelector('#submit-button')

let numOfAttempts = 0
let index
let indexToFind

// Grids
const grids = [
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
  {
    top: [4,1,2,2],
    left: [2,3,2,1],
    right: [2,2,1,3],
    bottom: [1,4,2,2]
  },
  {
    top: [3,3,1,2],
    left: [2,4,2,1],
    right: [2,1,3,3],
    bottom: [1,2,4,2]
  },
  {
    top: [4,1,2,2],
    left: [2,3,2,1],
    right: [2,1,2,3],
    bottom: [1,4,2,2]
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
let columnSolution = [firstSolutionColumn, secondSolutionColumn, thirdSolutionColumn, fourthSolutionColumn]

let fullGuess

function generateClues() {
  const randomNumber = Math.floor(Math.random() * grids.length)
  const gridSelected = grids[randomNumber]
  for (let i = 0; i < 4; i++) {
    topClue[i].textContent = gridSelected.top[i]
    leftClue[i].textContent = gridSelected.left[i]
    rightClue[i].textContent = gridSelected.right[i]
    bottomClue[i].textContent = gridSelected.bottom[i]
  }

  // Initial Affect on solution array by clues
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

    // If Clue is 2
    if (topClue[i].textContent == 2) {
      index = firstSolutionRow[i].indexOf(4)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
    }
    if (leftClue[i].textContent == 2) {
      index = firstSolutionColumn[i].indexOf(4)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
    }
    if (rightClue[i].textContent == 2) {
      index = fourthSolutionColumn[i].indexOf(4)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
    }
    if (bottomClue[i].textContent == 2) {
      index = fourthSolutionRow[i].indexOf(4)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
    }

    // If Clue is 3
    if (topClue[i].textContent == 3) {
      index = firstSolutionRow[i].indexOf(3)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = firstSolutionRow[i].indexOf(4)
      if (index > -1) {firstSolutionRow[i].splice(index, 1)}
      index = secondSolutionRow[i].indexOf(4)
      if (index > -1) {secondSolutionRow[i].splice(index, 1)}
    }
    if (leftClue[i].textContent == 3) {
      index = firstSolutionColumn[i].indexOf(3)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = firstSolutionColumn[i].indexOf(4)
      if (index > -1) {firstSolutionColumn[i].splice(index, 1)}
      index = secondSolutionColumn[i].indexOf(4)
      if (index > -1) {secondSolutionColumn[i].splice(index, 1)}
    }
    if (rightClue[i].textContent == 3) {
      index = fourthSolutionColumn[i].indexOf(3)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = fourthSolutionColumn[i].indexOf(4)
      if (index > -1) {fourthSolutionColumn[i].splice(index, 1)}
      index = thirdSolutionColumn[i].indexOf(4)
      if (index > -1) {thirdSolutionColumn[i].splice(index, 1)}
    }
    if (bottomClue[i].textContent == 3) {
      index = fourthSolutionRow[i].indexOf(3)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = fourthSolutionRow[i].indexOf(4)
      if (index > -1) {fourthSolutionRow[i].splice(index, 1)}
      index = thirdSolutionRow[i].indexOf(4)
      if (index > -1) {thirdSolutionRow[i].splice(index, 1)}
    }

    // Need to iterate over statements multiple times, arbitrary 10 iterations selected
    let count = 0
    while (count < 10) {
      // Remove possibilities where value has been found in other cell in row/column
      for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
          if (columnSolution[i][j].length == 1) {
            for (let k=0; k<4; k++) {
              indexToFind = parseInt(columnSolution[i][j][0])
              if (typeof columnSolution[i][k] !== 'undefined') {
                index = columnSolution[i][k].indexOf(indexToFind)
                if (index > -1 && columnSolution[i][k].length != 1) {
                  columnSolution[i][k].splice(index, 1)
                }
              }
            }
          }
        }
      }
      for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
          if (solution[i][j].length == 1) {
            for (let k=0; k<4; k++) {
              indexToFind = parseInt(solution[i][j][0])
              if (typeof solution[i][k] !== 'undefined') {
                index = solution[i][k].indexOf(indexToFind)
                if (index > -1 && solution[i][k].length != 1) {
                  solution[i][k].splice(index, 1)
                }
              }
            }
          }
        }
      }

      // Finds any cell that must equal a certain value based on other possibility lists
      for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
          columnSolution[i][j].forEach(value => {
              let valueArray = [0,1,2,3].splice([0,1,2,3].indexOf(value), 1)
              let colSolValArr0
              let colSolValArr1
              let colSolValArr2
              if (columnSolution[i][valueArray[0]] != undefined) {
                colSolValArr0 = columnSolution[i][valueArray[0]].indexOf(value)
              } else {
                colSolValArr0 = 0
              }
              if (columnSolution[i][valueArray[1]] != undefined) {
                colSolValArr1 = columnSolution[i][valueArray[1]].indexOf(value)
              } else {
                colSolValArr1 = 0
              }
              if (columnSolution[i][valueArray[2]] != undefined) {
                colSolValArr2 = columnSolution[i][valueArray[2]].indexOf(value)
              } else {
                colSolValArr2 = 0
              }
                if (colSolValArr0 == -1 && colSolValArr1 == -1 && colSolValArr2 == -1) {
                  index = columnSolution[i][j].indexOf(valueArray[0])
                  if (index > -1) {columnSolution[i][j].splice(index, 1)}
                  index = columnSolution[i][j].indexOf(valueArray[1])
                  if (index > -1) {columnSolution[i][j].splice(index, 1)}
                  index = columnSolution[i][j].indexOf(valueArray[2])
                  if (index > -1) {columnSolution[i][j].splice(index, 1)}
                }
          })
        }
      }
      for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
          solution[i][j].forEach(value => {
              let valueArray = [0,1,2,3].splice([0,1,2,3].indexOf(value), 1)
              let solValArr0
              let solValArr1
              let solValArr2
              if (solution[i][valueArray[0]] != undefined) {
                solValArr0 = solution[i][valueArray[0]].indexOf(value)
              } else {
                solValArr0 = 0
              }
              if (solution[i][valueArray[1]] != undefined) {
                solValArr1 = solution[i][valueArray[1]].indexOf(value)
              } else {
                solValArr1 = 0
              }
              if (solution[i][valueArray[2]] != undefined) {
                solValArr2 = solution[i][valueArray[2]].indexOf(value)
              } else {
                solValArr2 = 0
              }
                if (solValArr0 == -1 && solValArr1 == -1 && solValArr2 == -1) {
                  index = solution[i][j].indexOf(valueArray[0])
                  if (index > -1) {solution[i][j].splice(index, 1)}
                  index = solution[i][j].indexOf(valueArray[1])
                  if (index > -1) {solution[i][j].splice(index, 1)}
                  index = solution[i][j].indexOf(valueArray[2])
                  if (index > -1) {solution[i][j].splice(index, 1)}
                }
          })
        }
      }
      count++
    }
  }
  console.log(solution)
}

// Click Submit Attempt
submitAttempt.addEventListener('click', submitClicked)

function submitClicked(event) {
  event.preventDefault()
  console.log('submit')
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
    const firstRowInput = [[parseInt(inputGuess[0].value)], [parseInt(inputGuess[1].value)], [parseInt(inputGuess[2].value)], [parseInt(inputGuess[3].value)]]
    const secondRowInput = [[parseInt(inputGuess[4].value)], [parseInt(inputGuess[5].value)], [parseInt(inputGuess[6].value)], [parseInt(inputGuess[7].value)]]
    const thirdRowInput = [[parseInt(inputGuess[8].value)], [parseInt(inputGuess[9].value)], [parseInt(inputGuess[10].value)], [parseInt(inputGuess[11].value)]]
    const fourthRowInput = [[parseInt(inputGuess[12].value)], [parseInt(inputGuess[13].value)], [parseInt(inputGuess[14].value)], [parseInt(inputGuess[15].value)]]

    fullGuess = [firstRowInput, secondRowInput, thirdRowInput, fourthRowInput]
  }
  numOfAttempts++
  console.log(fullGuess)
  console.log(solution)
  if (JSON.stringify(fullGuess) == JSON.stringify(solution)) {
    messageArea.textContent = `Congratulations! You have completed the board in ${numOfAttempts} guess(es)`
  } else {
    messageArea.textContent = `Guess Incorrect. Please try again`
  }
}

generateClues()