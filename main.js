const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible"

// this will store any element that has "[data-open]" in a node list 
const openModal = document.querySelectorAll(modalOpen);

// this will store any element that has "[data-close]" in a node list 
const closeModal = document.querySelectorAll(modalClose);

// for of loop to iterate through node list of queried elements and adding eventlister to each one 
for (const elm of openModal) {
   elm.addEventListener('click', function() {
      const modalId = this.dataset.open;  // "this" is referring to the ELM
      document.getElementById(modalId).classList.add(isVisible)
   })
}


// close modal buttons 
for (const elm of closeModal) {
   elm.addEventListener('click', function() {
      this.parentElement.parentElement.classList.remove(isVisible)
   })
   }