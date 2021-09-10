// Coming Soon
const messageArea = document.querySelector('#message-area')
const comingSoonButton = document.querySelectorAll('.coming-soon-button')
comingSoonButton.forEach(element => element.addEventListener('click', function() {
  messageArea.textContent = ''

  const comingSoonMessage = document.createElement('h2')
  comingSoonMessage.classList.add('sub-heading')
  comingSoonMessage.setAttribute('id', 'coming-soon')
  const pageName = element.textContent
  comingSoonMessage.textContent = `${pageName} Page Coming Soon...`
  messageArea.appendChild(comingSoonMessage)
}))