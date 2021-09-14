// Penguins
const penguin = [
  {
    name: 'Adelie',
    image: './images/penguin-adelie.jpeg',
  },
  {
    name: 'African',
    image: './images/penguin-african.jpeg',
  },
  {
    name: 'Chinstrap',
    image: './images/penguin-chinstrap.jpeg',
  },
  {
    name: 'Emperor',
    image: './images/penguin-emperor.jpeg',
  },
  {
    name: 'Erect Crested',
    image: './images/penguin-erect-crested.jpeg',
  },
  {
    name: 'Fiordland',
    image: './images/penguin-fiordland.jpeg',
  },
  {
    name: 'Galapagos',
    image: './images/penguin-galapagos.jpeg',
  },
  {
    name: 'Gentoo',
    image: './images/penguin-gentoo.jpeg',
  },
  {
    name: 'Humboldt',
    image: './images/penguin-humboldt.jpeg',
  },
  {
    name: 'King',
    image: './images/penguin-king.jpeg',
  },
  {
    name: 'Little',
    image: './images/penguin-little.jpeg',
  },
  {
    name: 'Macaroni',
    image: './images/penguin-macaroni.jpeg',
  },
  {
    name: 'Magellanic',
    image: './images/penguin-magellanic.jpeg',
  },
  {
    name: 'Northern Rockhopper',
    image: './images/penguin-northern-rockhopper.jpeg',
  },
  {
    name: 'Royal',
    image: './images/penguin-royal.jpeg',
  },
  {
    name: 'Snares',
    image: './images/penguin-snares.jpeg',
  },
  {
    name: 'Southern Rockhopper',
    image: './images/penguin-southern-rockhopper.jpeg',
  },
  {
    name: 'Yellow Eyed',
    image: './images/penguin-yellow-eyed.jpeg',
  },
]

// Selects random penguin and displays it
function randomPenguin() {
  const penguinFigure = document.querySelector('#penguin-container')
  const penguinImage = document.createElement('img')
  penguinImage.setAttribute('id', 'penguin-image')
  penguinFigure.appendChild(penguinImage)
  const penguinCaption = document.createElement('figcaption')
  penguinCaption.setAttribute('id', 'penguin-caption')
  penguinFigure.appendChild(penguinCaption)

  const penguinID = Math.floor(Math.random() * penguin.length)
  console.log(penguinID)
  penguinImage.setAttribute('src', penguin[penguinID].image)
  penguinCaption.textContent = `${penguin[penguinID].name} Penguin`
}

randomPenguin()