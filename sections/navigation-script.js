const sections = [
  {
    name: 'Information',
    color: '#ACA1EE',
    message: 'The Information page offers information on the origins of Lockdown Lifesavers, and its purpose, as well as information surrounding lockdown in general',
    subsections: ['About', 'Advice', 'Updates', 'Charity']
  },
  {
    name: 'Games',
    color: '#B9EEAE',
    message: 'The Games page is a collection of some fun puzzles and games that can be played in browser',
    subsections: ['Battleships', 'Wordsearch', 'Skyscrapers', 'Minesweeper']
  },
  {
    name: 'Activities',
    color: '#EE9C9C',
    // color: '#EEC594',
    message: 'The Activities page offers some suggestions on how you can spend your time in lockdown. This can range from active activities such as exercises and recipes but also some more passive activities like film and TV reccomendations.',
    subsections: ['Exercises', 'Recipes', 'Films', 'TV']
  },
  {
    name: 'Shop',
    color: '#8FB3EE',
    message: 'The Shop is your number one source for all your irl lockdown needs',
    subsections: ['Shop', "Objective of Shop"]
  },
]

let currentPath = window.location.pathname
let currentPage = currentPath.split('/').pop()
let currentSection = currentPage.split('-')[0]

function createMainNav() {
  let header = document.querySelector('#header')
  let mainNav = document.createElement('nav')
  mainNav.setAttribute('id', 'main-nav')
  header.appendChild(mainNav)
  let pages = document.createElement('ul')
  pages.setAttribute('id', 'main-pages')
  mainNav.appendChild(pages)
  for (i=0; i<sections.length; i++) {
    let pageList = document.createElement('li')
    pageList.classList.add('main-nav-pages')
    pages.appendChild(pageList)
    let pageLink = document.createElement('a')
    let pageName = sections[i].name.toLowerCase()
    pageLink.setAttribute('href', `./${pageName}.html`)
    pageLink.textContent = sections[i].name
    pageList.appendChild(pageLink)
    if (pageName === currentSection) {
      pageLink.style.borderBottom = `solid 3px ${sections[i].color}`
    }
  }
}

function createSecondaryNav() {
  let header = document.querySelector('#header')
  let secondaryNav = document.createElement('nav')
  secondaryNav.setAttribute('id', 'secondary-nav')
  header.appendChild(secondaryNav)
  let pages = document.createElement('ul')
  pages.setAttribute('id', 'secondary-pages')
  secondaryNav.appendChild(pages)
  for (i=0; i<sections.length; i++) {
    let pageName = sections[i].name.toLowerCase()
    if (pageName === currentSection) {
      for (j=0; j<sections[i].subsections.length; j++) {
        let pageList = document.createElement('li')
        pageList.classList.add('secondary-nav-pages')
        pages.appendChild(pageList)
        let pageLink = document.createElement('a')
        let subName = sections[i].subsections[j].toLowerCase()
        let subNameLink = subName.split(' ').join('-')
        pageLink.setAttribute('href', `./${pageName}-${subNameLink}.html`)
        pageLink.textContent = sections[i].subsections[j]
        pageList.appendChild(pageLink)
        secondaryNav.style.backgroundColor = sections[i].color
      }
    }
  }
}

createMainNav()
createSecondaryNav()

function footerNav() {
  let footer = document.querySelector('#footer')
  footer.textContent = 'Hello'
}

footerNav()