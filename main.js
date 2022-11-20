const root = document.documentElement;


// THEME STUFF // 
const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open= 'open';
const active = 'active';

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn); // puts into node list 
const currentTheme = localStorage.getItem(theme) // storing theme in local browser storage 

const setTheme = (val) => {
   if (val === dark) {
      root.setAttribute(dataTheme, dark);
      localStorage.setItem(theme, dark)
   } else {
      root.setAttribute(dataTheme, light)
      localStorage.setItem(theme, light)
   }
}

// open/close theme panel ///
toggleTheme.addEventListener('click', function() {
   const tab = this.parentElement.parentElement;
   if (!tab.className.includes(open)) {
      tab.classList.add(open);
   } else {
      tab.classList.remove(open)
   }
})

const setActive = (elm, selector) => {
   if (document.querySelector(`${selector}.${active}`) !== null) {
      document.querySelector(`${selector}.${active}`).classList.remove(active);
   } else { 
      elm.classList.add(active)
   }
}


// for of loop for theme switcher 
for (const elm of switcher) {
   elm.addEventListener('click', function() {
      const toggle = this.dataset.toggle;
      setActive(elm, switcherBtn);
      setTheme(toggle)
})
}

//// -------------------- MODAL STUFF ------------------------ //////

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible"

// this will store any element that has "[data-open]" in a node list 
const openModal = document.querySelectorAll(modalOpen);

// this will store any element that has "[data-close]" in a node list 
const closeModal = document.querySelectorAll(modalClose);

// for of loop to iterate through node list of queried elements above 
//  and adding eventlistener to each one 

for (const element of openModal) { // open Modal buttons
   element.addEventListener('click', function() {
      const modalId = this.dataset.open;  // "this" is referring to the parent Element
      document.getElementById(modalId).classList.add(isVisible)
   })
}

for (const elm of closeModal) { // close modal buttons 
   elm.addEventListener('click', function() {
      this.parentElement.parentElement.classList.remove(isVisible)
   })
   }