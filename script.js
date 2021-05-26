console.log("hello")
console.log("array of customers")

const insertionPoint = document.querySelector("#output")

function nameToAbbr (stateName) {
    const idx = usStates.findIndex(function (state) {
      return state.name === stateName.toUpperCase()
    })
    return usStates[idx].abbreviation
  }
  

for (let customer of customers) {
   const custCard = document.createElement("div")
   custCard.classList.add("cust-card")
   insertionPoint.appendChild(custCard)

   const custImg = document.createElement("img")
   custImg.src = customer.picture.large
   custCard.appendChild(custImg)

   const custName = document.createElement("h2")
   custName.innerHTML = customer.name.first + " " + customer.name.last
   custCard.appendChild(custName)

   const custEmail = document.createElement("p")
   custEmail.innerHTML = customer.email
   custCard.appendChild(custEmail)

   const custAddress = document.createElement("p")
   custAddress.innerHTML = customer.location.street.number + " " + customer.location.street.name
   custCard.appendChild(custAddress)

   const custState = document.createElement("p")
   const abbr = nameToAbbr(customer.location.state)
   custState.innerHTML = customer.location.city + " " + abbr + " " + customer.location.postcode
   custCard.appendChild(custState)

   const custBirth = document.createElement("p")
   custBirth.innerText = "DOB: " + moment(customer.dob.date).format("MMM DD, YYYY")
   custCard.appendChild(custBirth)
   

   const custStart = document.createElement("p")
   custStart.innerText = "Customer since " + moment(customer.registered.date).format("MMM DD, YYYY")
   custCard.appendChild(custStart)

}