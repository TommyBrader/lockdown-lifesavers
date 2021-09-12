const sections = [
  {
    name: 'Information',
    hue: '249',
    saturation: '69',
    lightness: '78',
    message: 'The Information page offers information on the origins of Lockdown Lifesavers, and its purpose, as well as information surrounding lockdown in general',
    subsections: ['About', 'Updates']
  },
  {
    name: 'Games',
    hue: '110',
    saturation: '65',
    lightness: '81',
    message: 'The Games page is a collection of some fun puzzles and games that can be played in browser',
    subsections: ['Games', 'Battleships', 'Skyscrapers']
  },
  {
    name: 'Activities',
    hue: '0',
    saturation: '71',
    lightness: '77',
    message: 'The Activities page offers some suggestions on how you can spend your time in lockdown. This can range from active activities such as exercises and recipes but also some more passive activities like film and TV reccomendations.',
    subsections: ['Activities', 'Films', 'TV', 'Exercises', 'Recipes']
  },
  {
    name: 'Shop',
    hue: '217',
    saturation: '74',
    lightness: '75',
    message: 'The Shop is your number one source for all your irl lockdown needs',
    subsections: ['Shop']
  },
]

// Assigns the colours to the buttons and divs
function colorAssigner() {
  sections.forEach(element => {
    const id = element.name.toLowerCase()
    const button = document.getElementById(id)
    const div = document.getElementById(id + '-container')
    button.style.backgroundColor = `hsl(${element.hue}, ${element.saturation}%, ${element.lightness}%)`
    div.style.backgroundColor = `hsl(${element.hue}, ${element.saturation}%, ${element.lightness}%)`
  })
}
colorAssigner()

// When click buttons
const buttons = document.querySelectorAll('.section')
for (i=0; i<buttons.length; i++) {
  const buttonPressed = buttons[i]
  const section = sections[i]

  buttonPressed.addEventListener('click', function() {
    // Clear old clicked styles
    const allSections = document.querySelectorAll('.section')
    allSections.forEach(element => {
      element.style.removeProperty('width')
      element.style.removeProperty('height')
      element.style.removeProperty('font-size')
    })

    // Keep Button 'Clicked'
    const buttonID = section.name.toLowerCase()
    document.getElementById(buttonID).style.width = '100%'
    document.getElementById(buttonID).style.height = '100%'
    document.getElementById(buttonID).style.fontSize = '3.4rem'
    document.body.style.transition = '1s'
    const lighter = parseInt(section.lightness) + 10
    document.body.style.backgroundColor = `hsl(${section.hue}, ${section.saturation}%, ${lighter}%)`
    document.body.style.backgroundImage = `url(./images/${buttonID}-back.png)`

    // Creates content for the top information section
    const infoSection1 = document.getElementById('info-section1')
    infoSection1.innerHTML = ''
    const heading = document.createElement('h1')
    heading.setAttribute('id', 'section-heading')
    heading.innerHTML = section.name
    infoSection1.append(heading)
    const message = document.createElement('p')
    message.innerHTML = section.message
    infoSection1.append(message)

    // Creates content for the bottom information section
    const infoSection2 = document.getElementById('info-section2')
    infoSection2.innerHTML = ''
    const subArray = section.subsections
    for (j=0; j<subArray.length; j++) {
      const subSection = document.createElement('a')
      subSection.setAttribute('href', `./sections/${buttonID}/${buttonID}-${subArray[j].toLocaleLowerCase()}.html`)
      subSection.classList.add('subsection')
      subSection.innerHTML = subArray[j]
      infoSection2.append(subSection)
    }
  })
}