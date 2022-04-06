class Site {

  constructor() {
    this.date = date
  }

}

// get elements from page
const enterDate = document.querySelector('.enterDate')
const dateText = document.querySelector('#dateText')
const dateBox = document.querySelector('.dateBox').value
let formattedDate = new Date(dateBox)

// show text after entering date
enterDate.addEventListener('click', () => {
  dateText.textContent = "Thank you..It definitely is " + formattedDate.toDateString()
})