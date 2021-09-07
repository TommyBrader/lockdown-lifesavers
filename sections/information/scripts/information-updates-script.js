// Function to Display News Headlines and Informations
function displayNewsInfo(data) {
  const newsSection = document.querySelector('#news-section')
  console.log(data)
  for (let i=0; i<10; i++) {
    const thisArticle = data.response.results[i]
    const newsArticle = document.createElement('article')
    newsSection.appendChild(newsArticle)

    const newsDivide = document.createElement('div')
    newsDivide.classList.add('information-divide')
    newsArticle.appendChild(newsDivide)

    const headline = document.createElement('h3')
    headline.classList.add('news-headline')
    headline.textContent = thisArticle.webTitle
    newsArticle.appendChild(headline)
    

    const newsFrom = document.createElement('h4')
    newsFrom.classList.add('news-from')
    newsFrom.textContent = thisArticle.sectionName
    newsArticle.appendChild(newsFrom)

    const newsImageContainer = document.createElement('figure')
    newsImageContainer.classList.add('news-image-container')
    const newsImage = document.createElement('img')
    newsImage.setAttribute('alt', 'Article Image')
    newsImage.setAttribute('src', './images/news-image.png')
    newsImage.classList.add('news-image')
    newsImageContainer.appendChild(newsImage)
    newsArticle.appendChild(newsImageContainer)

    const newsText = document.createElement('p')
    newsText.classList.add('standard-text')
    newsText.textContent = `${thisArticle.blocks.body[0].bodyTextSummary.substring(0,301)}...`
    newsArticle.appendChild(newsText)

    const newsLinkText = document.createElement('p')
    newsLinkText.classList.add('standard-text')
    newsLinkText.classList.add('article-link')
    const newsLink = document.createElement('a')
    newsLink.textContent = 'Link to Article'
    newsLink.setAttribute('href', `${thisArticle.webUrl}`)
    newsLink.setAttribute('target', '_blank')
    newsLink.classList.add('information-link')
    newsLinkText.appendChild(newsLink)
    newsArticle.appendChild(newsLinkText)

    const newsDate = document.createElement('p')
    newsDate.classList.add('date-text')
    const date = thisArticle.webPublicationDate.substring(8,10) + '/' + thisArticle.webPublicationDate.substring(5,7) + '/' + thisArticle.webPublicationDate.substring(0,4)
    const time = thisArticle.webPublicationDate.substring(11, 16)
    newsDate.textContent = `Date Posted: ${date} at ${time}`
    newsArticle.appendChild(newsDate)
  }
}

// Function to Retrieve News Informations
function loadNewsApp() {
  const API_KEY = 'd4e299df-5afb-458d-97a0-cf0344df24b6'
  const PROXY_URL = 'https://content.guardianapis.com/search'
  fetch(`${PROXY_URL}?order-by=newest&page=1&show-blocks=body&show-elements=image&q=covid%20coronavirus%20vaccinations&api-key=${API_KEY}`, {
	"method": "GET"
}).then(function(res) {
    return res.json()
  }).then(function(data) {
    displayNewsInfo(data)
  })
}

loadNewsApp()