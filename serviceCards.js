
const serviceTiles = [
  {
    item: "meet&greet",
    open: "meet",
    image: "https://cdn.shopify.com/s/files/1/1938/8295/articles/shutterstock_1672130176_800x.jpg?v=1654021026" ,
    div: "Meet & Greet" ,
    h3: "Free Meet & Greet",
  },
  { 
    item: "boarding",
    open: "boarding",
    image: "https://hawaii.armymwr.com/application/files/8216/0459/7182/GettyImages-157668281.jpg",
    div: "Overnight Boarding",
    h3: "Private In-Home Boarding ",
  },
  {
    item: "training" ,
    open: "training",
    image: "https://muttmanners.com/wp-content/uploads/2011/07/puppy-training-tips-1.jpg",
    div: "Puppy Training",
    h3: "Obedience Training",
  },
  {
    item: "extendedStays",
    open: "extendedStay",
    image: "https://petfriendlytravel.com/wp-content/uploads/2022/05/Sonesta-Hotels-pet-policy.jpg",
    div: "Extended Stays",
    h3: "Long Term Boarding"
  },
  {
    item: "daycare",
    open: "daycare",
    image: "https://images.ctfassets.net/sfnkq8lmu5d7/4JmwoB9rMxCAhP7xzg2vWP/e446aec5bbd2b750588193b7a3b86b4e/The-Wildest_Editorial_Dog_Daycare-_More_Than_Fun_and_Games_Hero.jpg?w=1000&h=750&fl=progressive&q=80&fm=jpg",
    div: "Daycare" ,
    h3: "Doggy Daycare",
  },
  {
    item: "dropins",
    open: "dropins",
    image: "https://heydjangles.com/wp-content/uploads/2019/05/entryway-dog-door-rafterhouse.png",
    div: "Drop-INs",
    h3: "SW LV ONLY",
  },
];

const serviceGrid = document.querySelector(".services-grid")

for (const tile of serviceTiles) {
    const tiles = document.createElement('div');
    const tileContent = `
    <div class="portfolio-card" data-item="${tile.item}" data-open="${tile.open}">
    <div class="card-body">
      <img src="${tile.image}" alt="portfolio-icon">
      <div class="card-popup-box" >
        <div>${tile.div}</div>
        <h3>${tile.h3}</h3>
      </div>
    </div>
  </div>
    `;

    tiles.innerHTML = tileContent;
    serviceGrid.appendChild(tiles)   
}




//////   PopUp Modals    //////////

const eachCard = document.querySelector(".serviceCards");

const serviceCards = [
  {
    id: "meet",
    h3: "Schedule your free Meet&Greet today!",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>Free 15 minute Meet & Greets</strong></p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
   `,
  },
  {
    id: "boarding",
    h3: "Private boarding",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>Private In-Home Boarding</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
      `,
  },
  {
    id: "training",
    h3: "New Puppy Training",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>Have a new Puppy? I can help with training !</strong></p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
         `,
  },
  {
    id: "extendedStay",
    h3: "Extended Stays",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>boarding</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
            `,
  },
  {
    id: "daycare",
    h3: "Doggy Daycare",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>boarding</strong></p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
               `,
  },
  {
    id: "dropins",
    h3: "Drop in Visits",
    image: "/NancysAssets/Nancys logo.png",
    description: `<p><strong>boarding</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                  `,
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












