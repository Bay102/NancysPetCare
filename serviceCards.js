const eachCard = document.querySelector(".serviceCards");

const serviceCards = [
  {
    id: "meet",
    h3: "Schedule your free Meet&Greet today!",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>Free 15 minute Meet & Greets</strong></p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
   `
  },
  {
    id: "boarding",
    h3: "Private boarding",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>Private In-Home Boarding</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
      `
  },
  {
    id: "training",
    h3: "New Puppy Training",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>Have a new Puppy? I can help with training !</strong></p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
         `
  },
  {
    id: "extendedStay",
    h3: "Extended Stays",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>boarding</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
            `
  },
  {
    id: "daycare",
    h3: "Doggy Daycare",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>boarding</strong></p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
               `
  },
  {
    id: "dropins",
    h3: "Drop in Visits",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>boarding</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                  `
  },
];

const createCards = () => {
  const cards = serviceCards
  .map(({ id, h3, image, description }) => (
      `
      <div id="${id}" class="modal" data-animation="slideInOutTop">
      <div class="modal-dialog">
       <header class="modal-header">
          <h3>${h3}</h3>
          <i class="fas fa-times" data-service></i>
       </header>
       <div class="modal-body">
          <div class="img-wrapper">
             <img src="${image}">
          </div>
          <div class="text-wrapper">
            ${description}
          </div>
       </div>
      </div>
    </div>
      `
  )).join('');
  eachCard.innerHTML = cards;
};

createCards();
