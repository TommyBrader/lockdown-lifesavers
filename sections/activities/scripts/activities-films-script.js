// Variables
const netflix = [
  {
    name: 'Do The Right Thing',
    category: 'Classic',
    id: '925',
    image: '',
  },
  {
    name: 'The Dig',
    category: 'New (2020/2021)',
    id: '532865',
    image: '',
  },
  {
    name: 'Booksmart',
    category: 'Comedy',
    id: '505600',
    image: '',
  },
  {
    name: 'My Octopus Teacher',
    category: 'Documentary',
    id: '682110',
    image: '',
  },
  {
    name: 'The Handmaiden',
    category: 'Non-English Language',
    id: '290098',
    image: '',
  },
  {
    name: 'My Neighbour Totoro',
    category: 'Animation',
    id: '8392',
    image: '',
  },
  {
    name: 'Arrival',
    category: 'Author\'s Pick',
    id: '329865',
    image: '',
  },
]

const prime = [
  {
    name: 'Groundhog Day',
    category: 'Classic',
    id: '137',
    image: '',
  },
  {
    name: 'Palm Springs',
    category: 'New (2020/2021)',
    id: '587792',
    image: '',
  },
  {
    name: 'What We Do in the Shadows',
    category: 'Comedy',
    id: '411354',
    image: '',
  },
  {
    name: 'Searching for Sugar Man',
    category: 'Documentary',
    id: '84334',
    image: '',
  },
  {
    name: 'Parasite',
    category: 'Non-English Language',
    id: '496243',
    image: '',
  },
  {
    name: 'Fantastic Mr. Fox',
    category: 'Animation',
    id: '10315',
    image: '',
  },
  {
    name: 'Chef',
    category: 'Author\'s Pick',
    id: '212778',
    image: '',
  },
]

const disney = [
  {
    name: 'The Lion King',
    category: 'Classic',
    id: '8587',
    image: '',
  },
  {
    name: 'Nomadland',
    category: 'New (2020/2021)',
    id: '581734',
    image: '',
  },
  {
    name: 'Cool Runnings',
    category: 'Comedy',
    id: '864',
    image: '',
  },
  {
    name: 'Summer of Soul (...or, When the Revolution Could Not Be Televised)',
    category: 'Documentary',
    id: '776527',
    image: '',
  },
  {
    name: 'Coco',
    category: 'Animation',
    id: '354912',
    image: '',
  },
  {
    name: 'The Life Aquatic with Steve Zissou',
    category: 'Author\'s Pick',
    id: '421',
    image: '',
  },
]

const netflixButton = document.querySelector('#netflix-button')
const primeButton = document.querySelector('#prime-button')
const disneyButton = document.querySelector('#disney-button')
const filmsArticle = document.querySelector('#films-article')

// Function to Display Reccomended Films
function displayFilmsInfo(data, film) {
  console.log(data)

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
      filmGenre.textContent = `${data.genres[i].name}/`
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
  console.log('Netflix Pressed')
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
  console.log('Prime Pressed')
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
  console.log('Netflix Pressed')
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