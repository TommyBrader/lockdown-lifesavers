// Variables
const netflix = [
  {
    name: 'Do The Right Thing',
    category: 'Classic',
    id: '925',
    image: './images/dtrt.jpg',
  },
  {
    name: 'The Dig',
    category: 'New (2020/2021)',
    id: '532865',
    image: './images/td.jpg',
  },
  {
    name: 'Booksmart',
    category: 'Comedy',
    id: '505600',
    image: './images/b.jpg',
  },
  {
    name: 'My Octopus Teacher',
    category: 'Documentary',
    id: '682110',
    image: './images/mot.jpg',
  },
  {
    name: 'The Handmaiden',
    category: 'Non-English Language',
    id: '290098',
    image: './images/th.jpg',
  },
  {
    name: 'My Neighbour Totoro',
    category: 'Animation',
    id: '8392',
    image: './images/mnt.jpg',
  },
  {
    name: 'Arrival',
    category: 'Author\'s Pick',
    id: '329865',
    image: './images/a.jpg',
  },
]

const prime = [
  {
    name: 'Groundhog Day',
    category: 'Classic',
    id: '137',
    image: './images/gd.jpg',
  },
  {
    name: 'Palm Springs',
    category: 'New (2020/2021)',
    id: '587792',
    image: './images/ps.jpg',
  },
  {
    name: 'What We Do in the Shadows',
    category: 'Comedy',
    id: '411354',
    image: './images/wwdits.jpg',
  },
  {
    name: 'Searching for Sugar Man',
    category: 'Documentary',
    id: '84334',
    image: './images/sfsm.jpg',
  },
  {
    name: 'Parasite',
    category: 'Non-English Language',
    id: '496243',
    image: './images/p.jpg',
  },
  {
    name: 'Fantastic Mr. Fox',
    category: 'Animation',
    id: '10315',
    image: './images/fmf.jpg',
  },
  {
    name: 'Chef',
    category: 'Author\'s Pick',
    id: '212778',
    image: './images/c.jpg',
  },
]

const disney = [
  {
    name: 'The Lion King',
    category: 'Classic',
    id: '8587',
    image: './images/tlk.jpg',
  },
  {
    name: 'Nomadland',
    category: 'New (2020/2021)',
    id: '581734',
    image: './images/n.jpg',
  },
  {
    name: 'Cool Runnings',
    category: 'Comedy',
    id: '864',
    image: './images/cr.jpg',
  },
  {
    name: 'Summer of Soul (...or, When the Revolution Could Not Be Televised)',
    category: 'Documentary',
    id: '776527',
    image: './images/sos.jpg',
  },
  {
    name: 'Coco',
    category: 'Animation',
    id: '354912',
    image: './images/co.jpg',
  },
  {
    name: 'The Life Aquatic with Steve Zissou',
    category: 'Author\'s Pick',
    id: '421',
    image: './images/tlawsz.jpg',
  },
]

const netflixButton = document.querySelector('#netflix-button')
const primeButton = document.querySelector('#prime-button')
const disneyButton = document.querySelector('#disney-button')
const filmsArticle = document.querySelector('#films-article')

// Function to Display Reccomended Films
function displayFilmsInfo(data, film) {
  const filmDivide = document.createElement('div')
  filmDivide.classList.add('activities-divide')
  filmsArticle.appendChild(filmDivide)

  const filmCategory = document.createElement('h4')
  filmCategory.classList.add('film-category')
  filmCategory.textContent = film.category
  filmsArticle.appendChild(filmCategory)

  const filmName = document.createElement('h3')
  filmName.classList.add('film-name')
  const filmNameLink = document.createElement('a')
  filmNameLink.classList.add('film-name-link')
  filmNameLink.setAttribute('target', '_blank')
  filmNameLink.setAttribute('href', `https://www.themoviedb.org/movie/${film.id}`)
  filmNameLink.textContent = film.name
  filmName.appendChild(filmNameLink)
  filmsArticle.appendChild(filmName)

  const filmImageContainer = document.createElement('figure')
  filmImageContainer.classList.add('film-image-container')
  const filmImage = document.createElement('img')
  filmImage.classList.add('film-image')
  filmImage.setAttribute('alt', `Image from ${film.name}`)
  filmImage.setAttribute('src', film.image)
  filmImageContainer.appendChild(filmImage)
  filmsArticle.appendChild(filmImageContainer)

  const filmGenreText = document.createElement('h4')
  filmGenreText.classList.add('film-genre-text')
  filmGenreText.textContent = 'Genre: '
  for (i=0; i<data.genres.length; i++) {
    const filmGenre = document.createElement('span')
    filmGenre.classList.add('film-genre')
    if (data.genres.length === 1 || i === data.genres.length - 1) {
      filmGenre.textContent = data.genres[i].name
    } else {
      filmGenre.textContent = `${data.genres[i].name} / `
    }
    filmGenreText.appendChild(filmGenre)
  }
  filmsArticle.appendChild(filmGenreText)

  const filmDescription = document.createElement('p')
  filmDescription.classList.add('standard-text')
  filmDescription.textContent = `${data.overview} Runtime: ${data.runtime} minutes.`
  filmsArticle.appendChild(filmDescription)

  const filmsBottom = document.createElement('div')
  filmsBottom.classList.add('films-bottom')
  const filmDate = document.createElement('h4')
  filmDate.classList.add('film-date')
  filmDate.textContent = `Released: ${data.release_date.substring(0,4)}`
  filmsBottom.appendChild(filmDate)
  const filmScore = document.createElement('h4')
  filmScore.classList.add('film-score')
  filmScore.textContent = `TMDB Score: `
  const filmScoreSpan = document.createElement('span')
  filmScoreSpan.classList.add('film-score-span')
  filmScoreSpan.textContent = `${data.vote_average}/10`
  filmScore.appendChild(filmScoreSpan)
  filmsBottom.appendChild(filmScore)
  filmsArticle.appendChild(filmsBottom)
  
}

// Removes Button Stylings When a Button is Pressed
function removeButtonStyle() {
  netflixButton.style.removeProperty('background-color')
  netflixButton.style.removeProperty('color')
  primeButton.style.removeProperty('background-color')
  primeButton.style.removeProperty('color')
  disneyButton.style.removeProperty('background-color')
  disneyButton.style.removeProperty('color')
}

// Event Listeners for Button Presses
netflixButton.addEventListener('click', function() {
  // Reset other button styles
  removeButtonStyle()

  // Set Current button to selected
  netflixButton.style.backgroundColor = 'hsl(0, 71%, 67%)'
  netflixButton.style.color = 'white'

  // Clear Section
  filmsArticle.textContent = ''

  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/movie/'
  for (let i=0; i<netflix.length; i++) {
    const film = netflix[i]
    fetch(`${PROXY_URL}${film.id}?api_key=${API_KEY}`, {
    "method": "GET"
  }).then(function(res) {
      return res.json()
    }).then(function(data) {
      displayFilmsInfo(data, film)
    })
  }
})

primeButton.addEventListener('click', function() {
  // Reset other button styles
  removeButtonStyle()

  // Set Current button to selected
  primeButton.style.backgroundColor = 'hsl(0, 71%, 67%)'
  primeButton.style.color = 'white'

  // Clear Section
  filmsArticle.textContent = ''

  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/movie/'
  for (let i=0; i<prime.length; i++) {
    const film = prime[i]
    fetch(`${PROXY_URL}${film.id}?api_key=${API_KEY}`, {
    "method": "GET"
  }).then(function(res) {
      return res.json()
    }).then(function(data) {
      displayFilmsInfo(data, film)
    })
  }
})

disneyButton.addEventListener('click', function() {
  // Reset other button styles
  removeButtonStyle()

  // Set Current button to selected
  disneyButton.style.backgroundColor = 'hsl(0, 71%, 67%)'
  disneyButton.style.color = 'white'

  // Clear Section
  filmsArticle.textContent = ''

  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/movie/'
  for (let i=0; i<disney.length; i++) {
    const film = disney[i]
    fetch(`${PROXY_URL}${film.id}?api_key=${API_KEY}`, {
    "method": "GET"
  }).then(function(res) {
      return res.json()
    }).then(function(data) {
      displayFilmsInfo(data, film)
    })
  }
})

// Random Film Section
const randomFilmArticle = document.querySelector('#random-film-article')

function displayRandomFilmsInfo(data) {
  if (data.adult === true) {
    location.reload()
  }

  console.log(data)
  const filmDivide = document.createElement('div')
  filmDivide.classList.add('activities-divide')
  randomFilmArticle.appendChild(filmDivide)

  const filmName = document.createElement('h3')
  filmName.classList.add('film-name')
  const filmNameLink = document.createElement('a')
  filmNameLink.classList.add('film-name-link')
  filmNameLink.setAttribute('target', '_blank')
  filmNameLink.setAttribute('href', `https://www.themoviedb.org/movie/${data.id}`)
  filmNameLink.textContent = data.title
  filmName.appendChild(filmNameLink)
  randomFilmArticle.appendChild(filmName)

  const filmImageContainer = document.createElement('figure')
  filmImageContainer.classList.add('random-image-container')
  const filmImage = document.createElement('img')
  filmImage.classList.add('random-image')
  filmImage.setAttribute('alt', `Image from ${data.title}`)
  filmImage.setAttribute('src', './images/random-media.png')
  filmImageContainer.appendChild(filmImage)
  randomFilmArticle.appendChild(filmImageContainer)

  const filmGenreText = document.createElement('h4')
  filmGenreText.classList.add('film-genre-text')
  if (data.genres.length != 0) {
    filmGenreText.textContent = 'Genre: '
  }
  for (i=0; i<data.genres.length; i++) {
    const filmGenre = document.createElement('span')
    filmGenre.classList.add('film-genre')
    if (data.genres.length === 1 || i === data.genres.length - 1) {
      filmGenre.textContent = data.genres[i].name
    } else {
      filmGenre.textContent = `${data.genres[i].name} / `
    }
    filmGenreText.appendChild(filmGenre)
  }
  randomFilmArticle.appendChild(filmGenreText)

  const filmDescription = document.createElement('p')
  filmDescription.classList.add('standard-text')
  let runtime = ''
  if(data.runtime){
    runtime = `Runtime: ${data.runtime} minutes.`
  }
  filmDescription.textContent = `${data.overview} ${runtime}`
  randomFilmArticle.appendChild(filmDescription)

  const filmDate = document.createElement('h4')
  filmDate.classList.add('film-date')
  filmDate.textContent = `Released: ${data.release_date.substring(0,4)}`
  randomFilmArticle.appendChild(filmDate)
  const filmScore = document.createElement('h4')
  filmScore.classList.add('film-score')
  filmScore.textContent = `TMDB Score: `
  const filmScoreSpan = document.createElement('span')
  filmScoreSpan.classList.add('film-score-span')
  filmScoreSpan.textContent = `${data.vote_average}/10`
  filmScore.appendChild(filmScoreSpan)
  randomFilmArticle.appendChild(filmScore)

  if (data.vote_average == 0) {
    const zeroMessage = document.createElement('p')
    zeroMessage.classList.add('standard-text')
    zeroMessage.classList.add('zero-message')
    zeroMessage.textContent = 'A score of 0 usually means that the film is unrated on TMDB'
    randomFilmArticle.appendChild(zeroMessage)
  }
}

function loadRandomFilmApp() {
  // Generate random ID
  let randomID = Math.floor(Math.random() * 683996)

  // Clear Section
  randomFilmArticle.textContent = ''



  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/movie/'
  fetch(`${PROXY_URL}${randomID}?api_key=${API_KEY}`, {
  "method": "GET"
 }).then(function(res) {
    return res.json()
  }).then(function(data) {
    if (data.success === false){
      location.reload()
    } else {
      displayRandomFilmsInfo(data)
    }
  })
}

loadRandomFilmApp()