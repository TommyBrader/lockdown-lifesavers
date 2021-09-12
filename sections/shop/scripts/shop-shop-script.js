// Variables
// Products List
const clothing = [
  {
    id: '0',
    name: 'Lockdown Lifesavers Unisex White T-Shirt - Big Logo',
    imagePath: './images/white-t-big-logo.jpg',
    price: '11.99',
  },
  {
    id: '1',
    name: 'Lockdown Lifesavers Unisex White T-Shirt - Small Logo',
    imagePath: './images/white-t-small-logo.jpg',
    price: '11.99',
  },
  {
    id: '2',
    name: 'Lockdown Lifesavers Unisex White T-Shirt - Categories',
    imagePath: './images/white-t-cat.jpg',
    price: '11.99',
  },
  {
    id: '3',
    name: 'Lockdown Lifesavers Unisex Hoodie',
    imagePath: './images/hoodie.jpg',
    price: '19.99',
  },
  {
    id: '4',
    name: 'Lockdown Lifesavers Sweatpants',
    imagePath: './images/sweatpants.jpg',
    price: '9.99',
  },
  {
    id: '5',
    name: 'Lockdown Lifesavers Unisex Sports Top',
    imagePath: './images/sports-top.jpg',
    price: '9.99',
  },
]

const accessories = [
  {
    id: '0',
    name: 'Lockdown Lifesavers Mug',
    imagePath: './images/mug.jpg',
    price: '4.99',
  },
  {
    id: '1',
    name: 'Lockdown Lifesavers Phone Case',
    imagePath: './images/phone-case.jpg',
    price: '2.99',
  },
  {
    id: '2',
    name: 'Lockdown Lifesavers Cushion',
    imagePath: './images/cushion.jpg',
    price: '5.99',
  },
]

const sports = [
  {
    id: '0',
    name: 'Lockdown Lifesavers Unisex Sports Top',
    imagePath: './images/sports-top.jpg',
    price: '9.99',
  },
  {
    id: '1',
    name: 'Badminton Kit',
    imagePath: './images/badminton.jpg',
    price: '24.99',
  },
  {
    id: '2',
    name: 'Lockdown Lifesavers Football',
    imagePath: './images/football.jpg',
    price: '7.99',
  },
  {
    id: '3',
    name: 'Lockdown Lifesavers Frisbee',
    imagePath: './images/frisbee.jpg',
    price: '3.99',
  },
]

const productCategoryArray = {Clothing:clothing, Accessories:accessories, Sports:sports}
const productCategories = document.querySelectorAll('.product-categories')

// Basket Variables
let basketList = []
const basketArticle = document.querySelector('#basket')
const defaultBasket = document.createElement('p')
defaultBasket.setAttribute('id', 'empty-basket')
defaultBasket.classList.add('standard-text')
defaultBasket.textContent = 'Your Basket Is Currently Empty'
basketArticle.appendChild(defaultBasket)
const basketTotalArticle = document.querySelector('#basket-total')
const basketTotalDiv = document.createElement('div')
basketTotalDiv.setAttribute('id', 'basket-total-amount')
basketTotalDiv.textContent = 'Total: £'
const basketTotalAmount = document.createElement('span')
basketTotalAmount.setAttribute('id', 'basket-total-amount-number')


// Removes Button Stylings When a Button is Pressed
function removeButtonStyle() {
  productCategories.forEach(element => 
    element.style.removeProperty('background-color') &&
    element.style.removeProperty('color'))
}

productCategories.forEach(element => element.addEventListener('click', function(event) {
  event.preventDefault()

  // Remove button stylings to deselect button
  removeButtonStyle()
  // Set Current button to selected
  element.style.backgroundColor = 'hsl(217, 74%, 75%)'
  element.style.color = 'white'
  
  // Product and Product Section Variables
  const products = productCategoryArray[element.innerText]
  const productsSection = document.querySelector('#products-section')

  // Clear any existing messages or products
  productsSection.innerText = ''

  // Create section heading and products article
  const categoryHeading = document.createElement('h2')
  categoryHeading.classList.add('sub-heading')
  categoryHeading.setAttribute('id', 'category-heading')
  categoryHeading.innerText = element.innerText + ':'
  productsSection.appendChild(categoryHeading)

  const productsArticle = document.createElement('article')
  productsArticle.setAttribute('id', 'products-article')
  productsSection.appendChild(productsArticle)

  // Display products for relevant section
  products.forEach((item) => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product-div')
    productsArticle.appendChild(productDiv)
    const productFigure = document.createElement('figure')
    productFigure.classList.add('product')
    productDiv.appendChild(productFigure)

    const productImage = document.createElement('img')
    productImage.classList.add('product-image')
    productImage.setAttribute('src', `${item.imagePath}`)
    productImage.setAttribute('alt', `${item.name} Image`)
    productFigure.appendChild(productImage)

    const productName = document.createElement('figcaption')
    productName.classList.add('product-name')
    productName.textContent = item.name
    productFigure.appendChild(productName)

    const bottomOfProduct = document.createElement('div')
    bottomOfProduct.classList.add('bottom-of-product')
    productFigure.appendChild(bottomOfProduct)
    const productPrice = document.createElement('figcaption')
    productPrice.classList.add('product-price')
    productPrice.textContent = '£' + item.price
    bottomOfProduct.appendChild(productPrice)

    // const addToBasket = document.createElement('figcaption')
    // addToBasket.classList.add('add-to-basket')
    const addToBasketButton = document.createElement('button')
    addToBasketButton.classList.add('add-to-basket-button')
    addToBasketButton.setAttribute('value', element.innerText)
    addToBasketButton.type = 'button'
    addToBasketButton.textContent = 'Add to Basket'
    addToBasketButton.dataset.id = item.id
    addToBasketButton.addEventListener('click', addToBasketClicked)
    bottomOfProduct.appendChild(addToBasketButton)
  })
}))

// Basket Functions
function addToBasketClicked(event) {
  event.preventDefault()
  const itemID = event.target.dataset.id
  const products = productCategoryArray[event.target.value]
  item = products[itemID]
  for (i=0; i<basketList.length; i++) {
    if (basketList[i] === item.name) {
      alert('Item Already Added To Basket')
      return
    }
  }
  const basketDiv = document.createElement('div')
  const basketFigure = document.createElement('figure')
  basketFigure.classList.add('product-in-basket')

  const basketRemove = document.createElement('button')
  basketRemove.classList.add('basket-remove')
  basketRemove.setAttribute('type', 'button')
  basketRemove.textContent = 'REMOVE'
  basketRemove.addEventListener('click', function(event) {
    event.preventDefault()
    basketDiv.innerHTML = ''
    const index = basketList.indexOf(item.name)
    basketList.splice(index, 1)
    updateTotal(itemID)
    if (basketList.length === 0) {
      basketArticle.appendChild(defaultBasket)
      basketTotalAmount.textContent = ''
      basketTotalArticle.innerHTML = ''
    }
  })
  if (basketList.length === 0) {
    basketArticle.innerHTML = ''
  }

  const basketImage = document.createElement('img')
  basketImage.classList.add('basket-image')
  basketImage.setAttribute('src', item.imagePath)
  basketImage.setAttribute('alt', item.name)

  const basketProductName = document.createElement('figcaption')
  basketProductName.classList.add('basket-product-name')
  basketProductName.textContent = item.name

  const basketQuantity = document.createElement('input')
  basketQuantity.classList.add('basket-quantity')
  basketQuantity.setAttribute('type', 'number')
  basketQuantity.setAttribute('name', 'quantity')
  basketQuantity.setAttribute('value', 1)
  basketQuantity.setAttribute('min', 1)
  let quantity = basketQuantity.value
  basketQuantity.addEventListener('input', function(event) {
    event.preventDefault()
    quantity = basketQuantity.value
    basketPriceSymbol.textContent = '£'
    basketPrice.textContent = (quantity * item.price).toFixed(2)
    basketPriceSymbol.appendChild(basketPrice)
    updateTotal(itemID)
  })

  const basketPriceSymbol = document.createElement('figcaption')
  basketPriceSymbol.classList.add('basket-price-symbol')
  basketPriceSymbol.textContent = '£'
  const basketPrice = document.createElement('span')
  basketPrice.classList.add('basket-price')
  basketPrice.textContent = (quantity * item.price).toFixed(2)

  basketFigure.appendChild(basketRemove)
  basketFigure.appendChild(basketImage)
  basketFigure.appendChild(basketProductName)
  basketFigure.appendChild(basketQuantity)
  basketPriceSymbol.appendChild(basketPrice)
  basketFigure.appendChild(basketPriceSymbol)

  basketDiv.appendChild(basketFigure)
  basketArticle.appendChild(basketDiv)

  basketPriceSymbol.appendChild(basketPrice)
  basketTotalArticle.appendChild(basketTotalDiv)
  basketTotalDiv.appendChild(basketTotalAmount)

  updateTotal(itemID)

  basketList.push(item.name)
}

// A function for updating the total
function updateTotal(itemID) {
  const basketPriceArray = document.querySelectorAll('.basket-price')
  let total = 0
  for(i=0; i<basketPriceArray.length; i++) {
    total = parseFloat(basketPriceArray[i].textContent) + total
  }
  basketTotalAmount.textContent = (total).toFixed(2)
}

// Purchase Button
const basketPurchaseArticle = document.querySelector('#basket-purchase-article')
const basketPurchaseButton = document.createElement('button')
basketPurchaseButton.setAttribute('id', 'basket-purchase-button')
basketPurchaseButton.setAttribute('type', 'button')
basketPurchaseButton.textContent = 'Purchase'
basketPurchaseButton.addEventListener('click', function(event) {
  event.preventDefault()
  if (basketList.length === 0) {
    alert('The Basket Is Empty So A Purchase Cannot be Made')
  }
  else {
    const totalSpent = document.querySelector('#basket-total-amount-number')
    alert('Purchase Successful. Amount Spent: £' + totalSpent.textContent)
    basketArticle.innerHTML = ''
    basketArticle.appendChild(defaultBasket)
    basketTotalAmount.textContent = ''
    basketTotalArticle.innerHTML = ''
    basketList = []
  }
})
basketPurchaseArticle.appendChild(basketPurchaseButton)