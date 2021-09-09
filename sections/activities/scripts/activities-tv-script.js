// Variables
const netflix = [
  {
    name: 'Breaking Bad',
    category: 'Drama',
    id: '1396',
    image: './images/bb.jpg',
  },
  {
    name: 'The IT Crowd',
    category: 'Comedy',
    id: '2490',
    image: './images/titc.jpg',
  },
  {
    name: 'BoJack Horseman',
    category: 'Animation',
    id: '61222',
    image: './images/bh.jpg',
  },
  {
    name: 'Feel Good',
    category: 'New (2020/2021)',
    id: '99610',
    image: './images/fg.jpg',
  },
  {
    name: 'Master of None',
    category: 'Author\'s Pick',
    id: '64254',
    image: './images/mon.jpg',
  },
]

const prime = [
  {
    name: 'Mad Men',
    category: 'Drama',
    id: '1104',
    image: './images/mm.jpg',
  },
  {
    name: 'Fleabag',
    category: 'Comedy',
    id: '67070',
    image: './images/f.jpg',
  },
  {
    name: 'Avatar: The Last Airbender',
    category: 'Animation',
    id: '246',
    image: './images/atla.jpg',
  },
  {
    name: 'Invincible',
    category: 'New (2020/2021)',
    id: '95557',
    image: './images/i.jpg',
  },
  {
    name: 'Mozart in the Jungle',
    category: 'Author\'s Pick',
    id: '61744',
    image: './images/mitj.jpg',
  },
]

const disney = [
  {
    name: 'Sons of Anarchy',
    category: 'Drama',
    id: '1409',
    image: './images/soa.jpg',
  },
  {
    name: 'Atlanta',
    category: 'Comedy',
    id: '65495',
    image: './images/atl.jpg',
  },
  {
    name: 'Bob\'s Burgers',
    category: 'Animation',
    id: '32726',
    image: './images/bob.jpg',
  },
  {
    name: 'Loki',
    category: 'New (2020/2021)',
    id: '84958',
    image: './images/l.jpg',
  },
  {
    name: 'The Mandalorian',
    category: 'Author\'s Pick',
    id: '82856',
    image: './images/tm.jpg',
  },
]

const netflixButton = document.querySelector('#netflix-button')
const primeButton = document.querySelector('#prime-button')
const disneyButton = document.querySelector('#disney-button')
const tvsArticle = document.querySelector('#tv-article')

// Function to Display Reccomended tvs
function displaytvInfo(data, tv) {
  console.log(data)

  const tvDivide = document.createElement('div')
  tvDivide.classList.add('activities-divide')
  tvsArticle.appendChild(tvDivide)

  const tvCategory = document.createElement('h4')
  tvCategory.classList.add('tv-category')
  tvCategory.textContent = tv.category
  tvsArticle.appendChild(tvCategory)

  const tvName = document.createElement('h3')
  tvName.classList.add('tv-name')
  const tvNameLink = document.createElement('a')
  tvNameLink.classList.add('tv-name-link')
  tvNameLink.setAttribute('target', '_blank')
  tvNameLink.setAttribute('href', `https://www.themoviedb.org/tv/${tv.id}`)
  tvNameLink.textContent = tv.name
  tvName.appendChild(tvNameLink)
  tvsArticle.appendChild(tvName)

  const tvImageContainer = document.createElement('figure')
  tvImageContainer.classList.add('tv-image-container')
  const tvImage = document.createElement('img')
  tvImage.classList.add('tv-image')
  tvImage.setAttribute('alt', `Image from ${tv.name}`)
  tvImage.setAttribute('src', tv.image)
  tvImageContainer.appendChild(tvImage)
  tvsArticle.appendChild(tvImageContainer)

  const tvGenreText = document.createElement('h4')
  tvGenreText.classList.add('tv-genre-text')
  tvGenreText.textContent = 'Genre: '
  for (i=0; i<data.genres.length; i++) {
    const tvGenre = document.createElement('span')
    tvGenre.classList.add('tv-genre')
    if (data.genres.length === 1 || i === data.genres.length - 1) {
      tvGenre.textContent = data.genres[i].name
    } else {
      tvGenre.textContent = `${data.genres[i].name} / `
    }
    tvGenreText.appendChild(tvGenre)
  }
  tvsArticle.appendChild(tvGenreText)

  const tvDescription = document.createElement('p')
  tvDescription.classList.add('standard-text')
  let runtime = ''
  if(data.episode_run_time.length != 0){
    runtime = `Episode Runtime: ${data.episode_run_time[0]} minutes.`
  }
  tvDescription.textContent = `${data.overview} ${runtime}`
  tvsArticle.appendChild(tvDescription)

  const tvsBottom = document.createElement('div')
  tvsBottom.classList.add('tvs-bottom')
  const tvDate = document.createElement('h4')
  tvDate.classList.add('tv-date')
  tvDate.textContent = `${data.number_of_episodes} Episodes (${data.first_air_date.substring(0,4)} - ${data.last_air_date.substring(0,4)})`
  tvsBottom.appendChild(tvDate)
  const tvScore = document.createElement('h4')
  tvScore.classList.add('tv-score')
  tvScore.textContent = `TMDB Score: `
  const tvScoreSpan = document.createElement('span')
  tvScoreSpan.classList.add('tv-score-span')
  tvScoreSpan.textContent = `${data.vote_average}/10`
  tvScore.appendChild(tvScoreSpan)
  tvsBottom.appendChild(tvScore)
  tvsArticle.appendChild(tvsBottom)
  
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
  tvsArticle.textContent = ''

  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/tv/'
  for (let i=0; i<netflix.length; i++) {
    const tv = netflix[i]
    fetch(`${PROXY_URL}${tv.id}?api_key=${API_KEY}`, {
    "method": "GET"
  }).then(function(res) {
      return res.json()
    }).then(function(data) {
      displaytvInfo(data, tv)
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
  tvsArticle.textContent = ''

  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/tv/'
  for (let i=0; i<prime.length; i++) {
    const tv = prime[i]
    fetch(`${PROXY_URL}${tv.id}?api_key=${API_KEY}`, {
    "method": "GET"
  }).then(function(res) {
      return res.json()
    }).then(function(data) {
      displaytvInfo(data, tv)
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
  tvsArticle.textContent = ''

  // Create Section
  const API_KEY = '0d7501914a76e63d57c4a39b330f09de'
  const PROXY_URL = 'https://api.themoviedb.org/3/tv/'
  for (let i=0; i<disney.length; i++) {
    const tv = disney[i]
    fetch(`${PROXY_URL}${tv.id}?api_key=${API_KEY}`, {
    "method": "GET"
  }).then(function(res) {
      return res.json()
    }).then(function(data) {
      displaytvInfo(data, tv)
    })
  }
})