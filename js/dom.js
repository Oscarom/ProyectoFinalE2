/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

const cards = $(".cards");
const nuevoElement = (tag) => document.createElement(tag);

const cardN = (obj) => {
  const div = nuevoElement("div");

  div.className = "card-m col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12";

  // Insertar los elementos del card
  div.innerHTML = `

  <div class="borde">
     
   <div class="border secondary-border-subtle borde2">

      <img src="${obj.flags.png}" alt="${obj.name.common}">
    
      <div>
        
        <div>
          <p class="fw-bold mt-3 mb-3 titulo">${obj.name.common}</p>
        </div>

        <div class="body-card">
        <p class="text-card"><span class="bold fw-bold">Population: </span>${obj.population}</p>
        <p class="text-card"><span class="bold fw-bold">Capital: </span>${obj.capital}</p>
        <p class="text-card"><span class="bold fw-bold">Region: </span>${obj.region}</p>
        </div>
        
      </div>
   </div>
    

  </div>
`;
  return div;
};

const showCards = (arr) => {
  cards.innerHTML = "";
  arr.forEach((element) => {
    const card = cardN(element);
    cards.appendChild(card);
  });
};

export default {
  cardN,
  showCards,
  $,
};
