const root = document.documentElement;


//// -------------------- THEME STUFF ------------------------ //////
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


// open/close theme panel ///
toggleTheme.addEventListener('click', function() {
   const tab = this.parentElement.parentElement;
   if (!tab.className.includes(open)) {
      tab.classList.add(open);
   } else {
      tab.classList.remove(open)
   }
})


// ask about this 
const setActive = (elm, selector) => {
   if (document.querySelector(`${selector}.${active}`) !== null) {
      document.querySelector(`${selector}.${active}`).classList.remove(active);
   } 
   elm.classList.add(active)
}


// 
const setTheme = (val) => {
   if (val === dark) {
      root.setAttribute(dataTheme, dark);
      localStorage.setItem(theme, dark)
   } else {
      root.setAttribute(dataTheme, light)
      localStorage.setItem(theme, light)
   }
}

// theme storage 
if (currentTheme) {
   root.setAttribute(dataTheme, currentTheme);
   switcher.forEach((btn) => {
      btn.classList.remove(active)
   })
   if (currentTheme === dark) {
      switcher[1].classList.add(active)
   } else {
      switcher[0].classList.add(active)
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

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const serviceClose = '[data-service]';

// this will store any element that has "[data-open]" in a node list 
const openModal = document.querySelectorAll(modalOpen);

// this will store any element that has "[data-close]" in a node list 
const closeModal = document.querySelectorAll(modalClose);

//
const closeService = document.querySelectorAll(serviceClose);


// for of loop to iterate through node list of queried elements above 
//  and adding eventlistener to each one 
for (const elm of openModal) { // open Modal buttons
   elm.addEventListener('click', function() {
      const modalId = this.dataset.open;  // "this" is referring to the parent Element
      document.getElementById(modalId).classList.add(isVisible)
   })
}

for (const elm of closeModal) { // close modal buttons 
   elm.addEventListener('click', function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible)
   })
}




//// -------------------- SERVICES STUFF (portfolio) ------------------------ //////

   const dataFilter = '[data-filter]';
   const servicesData = "[data-item]";
   const searchBox = document.querySelector('#search');

   const filterLink = document.querySelectorAll(dataFilter); //  Node list of all HTML tags with data-filter
   const servicesItems = document.querySelectorAll(servicesData); //  Node list of all HTML tags with data-item



   // Search Box 
   searchBox.addEventListener('keyup', (event) => {
      const searchInput = event.target.value.toLowerCase().trim();
      
      servicesItems.forEach((card) => {
         if (card.dataset.item.includes(searchInput)) {
            card.style.display = 'block';
         } else {
            card.style.display = 'none'
         }
      })
   })


   // filtering loop
   for (const link of filterLink) {
      link.addEventListener('click', function() {
         setActive(link, '.filter-link');
         const filter = this.dataset.filter;
         servicesItems.forEach((card) => {
            if (filter === 'all') {
               card.style.display = 'block';
            } else if (card.dataset.item === filter) {
               card.style.display = 'block';
            } else {
               card.style.display = 'none';
            }
         })
      })
   }


// Modals 

document.addEventListener('click', (e) => {
   if (e.target === document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
   }
})

document.addEventListener('keyup', (e) => {
   if(e.key === 'Escape') {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
   }
});

for (const elm of closeService) {
   elm.addEventListener("click", function() {
      console.log(elm)
      this.parentElement.parentElement.parentElement.classList.remove(isVisible)
   })
}
