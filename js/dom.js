/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
data-bs-toggle="modal" data-bs-target="#exampleModal">
*/

const $ = (selector) => document.querySelector(selector);

const cards = $(".cards");
const mod = $(".modb")
const nuevoElement = (tag) => document.createElement(tag);

const cardN = (obj) => {
  const div = nuevoElement("div");

  div.className = " col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 ";

  div.innerHTML = `

  <div class="borde card-m" id="${obj.name.common}"data-bs-toggle="modal" data-bs-target="#exampleModal">
     
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

const cardM = (obj) => {
  const div = nuevoElement("div");

  div.className = " col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12";

  div.innerHTML = `

  <div class="borde card-m">
     
   <div class="border secondary-border-subtle borde2">

      <img src="${obj[0].flags.png}" alt="${obj[0].name.common}">
    
      <div>
        
        <div>
          <p class="fw-bold mt-3 mb-3 titulo">${obj[0].name.common}</p>
        </div>

        <div class="body-card">
        <p class="text-card"><span class="bold fw-bold">Population: </span>${obj[0].population}</p>
        <p class="text-card"><span class="bold fw-bold">Capital: </span>${obj[0].capital}</p>
        <p class="text-card"><span class="bold fw-bold">Region: </span>${obj[0].region}</p>
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

const showCard = (obj) => {
  mod.innerHTML = "";
  const cardm = cardM(obj);
  mod.appendChild(cardm)
};



export default {
  cardN,
  showCards,
  cardM,
  showCard,
  $
};
