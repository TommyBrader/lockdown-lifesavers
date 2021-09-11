// Section Information
const sections = [
  {
    name: 'Information',
    color: '#ACA1EE',
    message: 'The Information page offers information on the origins of Lockdown Lifesavers, and its purpose, as well as information surrounding lockdown in general',
    subsections: ['About', 'Updates']
  },
  {
    name: 'Games',
    color: '#B9EEAE',
    message: 'The Games page is a collection of some fun puzzles and games that can be played in browser',
    subsections: ['Games', 'Battleships', 'Skyscrapers']
  },
  {
    name: 'Activities',
    color: '#EE9C9C',
    // color: '#EEC594',
    message: 'The Activities page offers some suggestions on how you can spend your time in lockdown. This can range from active activities such as exercises and recipes but also some more passive activities like film and TV reccomendations.',
    subsections: ['Activities', 'Films', 'TV', 'Exercises', 'Recipes']
  },
  {
    name: 'Shop',
    color: '#8FB3EE',
    message: 'The Shop is your number one source for all your irl lockdown needs',
    subsections: ['Shop']
  },
]

// Variables
const currentPath = window.location.pathname
const currentPage = currentPath.split('/').pop()
const currentSection = currentPage.split('-')[0]
const currentSubSection = (currentPage.split('-')[1]).split('.')[0]

// Create Main Navigation Bar
function createMainNav() {
  const header = document.querySelector('#header')
  const mainNav = document.createElement('nav')
  mainNav.setAttribute('id', 'main-nav')
  header.appendChild(mainNav)
  const pages = document.createElement('ul')
  pages.setAttribute('id', 'main-pages')
  mainNav.appendChild(pages)
  for (i=0; i<sections.length; i++) {
    const pageList = document.createElement('li')
    pageList.classList.add('main-nav-pages')
    pages.appendChild(pageList)
    const pageLink = document.createElement('a')
    const pageName = sections[i].name.toLowerCase()
    pageLink.textContent = sections[i].name
    if (pageLink.textContent == 'Information') {
      pageLink.setAttribute('href', '../information/information-about.html')
    } else {
      pageLink.setAttribute('href', `../${pageName}/${pageName}-${pageName}.html`)
    }
    pageList.appendChild(pageLink)
    if (pageName === currentSection) {
      pageLink.style.borderBottom = `solid 3px ${sections[i].color}`
    }
  }
}

// Create Secondary Navigation Bar
function createSecondaryNav() {
  const header = document.querySelector('#header')
  const secondaryNav = document.createElement('nav')
  secondaryNav.setAttribute('id', 'secondary-nav')
  header.appendChild(secondaryNav)
  const logoTag = document.createElement('a')
  logoTag.setAttribute('href', '../../index.html')
  secondaryNav.appendChild(logoTag)
  const logo = document.createElement('img')
  logo.setAttribute('src', '../../images/ll-logo-small.png')
  logo.setAttribute('id', 'll-logo')
  logo.setAttribute('alt', 'Lockdown Lifesavers Small Logo')
  logoTag.appendChild(logo)
  const pages = document.createElement('ul')
  pages.setAttribute('id', 'secondary-pages')
  secondaryNav.appendChild(pages)

  const heading = document.querySelector('#heading-main')
  heading.textContent = currentSubSection
  const stopSpan = document.createElement('span')
  stopSpan.textContent = '.'
  stopSpan.setAttribute('id', 'stop')
  heading.appendChild(stopSpan)

  for (i=0; i<sections.length; i++) {
    const pageName = sections[i].name.toLowerCase()
    if (pageName === currentSection) {
      for (j=0; j<sections[i].subsections.length; j++) {
        const pageList = document.createElement('li')
        pageList.classList.add('secondary-nav-pages')
        pages.appendChild(pageList)
        const pageLink = document.createElement('a')
        const subName = sections[i].subsections[j].toLowerCase()
        const subNameLink = subName.split(' ').join('-')
        pageLink.setAttribute('href', `./${pageName}-${subNameLink}.html`)
        pageLink.textContent = sections[i].subsections[j]
        pageList.appendChild(pageLink)
        secondaryNav.style.backgroundColor = sections[i].color
        stopSpan.style.color = sections[i].color
        if (subName === currentSubSection) {
          pageLink.style.fontWeight = 'bold'
        }
      }
      // Page Finished Checked
      const contentSection = document.querySelector('.prime-section')
      if (contentSection.textContent === '') {
        const comingSoonMessage = document.createElement('h1')
        comingSoonMessage.setAttribute('id', 'coming-soon')
        comingSoonMessage.textContent = 'Coming Soon...'
        comingSoonMessage.style.textDecoration = `underline solid ${sections[i].color}`
        contentSection.appendChild(comingSoonMessage)
      }
    }
  }
}

// Create Footer
function footerNav() {
  const footer = document.querySelector('#footer')
  const footerUL = document.createElement('ul')
  footerUL.setAttribute('id', 'footer-list')
  footer.appendChild(footerUL)
  const footerTop = document.createElement('li')
  footerUL.appendChild(footerTop)
  const footerTopLink = document.createElement('a')
  footerTopLink.setAttribute('href', '#main-nav')
  footerTopLink.textContent = 'Back To Top'
  footerTop.appendChild(footerTopLink)
  const footerContact = document.createElement('li')
  footerContact.textContent = 'Contact Us: '
  const email = document.createElement('a')
  email.setAttribute('href', 'mailto:tbrade01@mail.bbk.ac.uk')
  email.textContent = 'tbrade01@mail.bbk.ac.uk'
  footerContact.appendChild(email)
  footerUL.appendChild(footerContact)
  const footerGIT = document.createElement('li')
  const GITLink = document.createElement('a')
  GITLink.setAttribute('href', 'https://github.com/TommyBrader')
  GITLink.textContent = 'GitHub'
  footerGIT.appendChild(GITLink)
  footerUL.appendChild(footerGIT)
}

// Call Nav Functions
createMainNav()
createSecondaryNav()
footerNav()

