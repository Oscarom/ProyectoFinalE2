/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
data-bs-toggle="modal" data-bs-target="#exampleModal">
*/


const $ = (selector) => document.querySelector(selector);

const cards = $(".cards");
const mod = $(".modb");
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
          <p class="fw-bold mt-2 mb-2 titulo p-2">${obj.name.common}</p>
        </div>

        <div class="body-card p-2">
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
  let [moneda] = Object.keys(obj[0].currencies)
  let lenguajes = obj[0].languages
  console.log(lenguajes)
  let len = Object.values(lenguajes)
  let borderC = obj[0].borders


   

  div.className = "container contenedorm";

  div.innerHTML = `

  <div class="row header">
    <div class="col-6 head">Where in the word?</div>
    <div class="col-6 darkm">Dark Mode</div>   
     <hr>
  </div>
  
  <div class="row button">
    <button type="button" class="btn btn-light btn-modal"data-bs-dismiss="modal">Regresar</button>
  </div>

  <div class="row cbody">

   <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 flag"><img src="${obj[0].flags.png}" alt="${obj[0].name.common}"></div>

   <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
   <div class="container contenedor2">
   <p class="fw-bold mt-3 mb-3 titulo">${obj[0].name.common}</p>
   <div class="row">
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
    <p class="text-card"><span class="bold fw-bold">Native name:  </span>${obj[0].name.official}</p>
    <p class="text-card"><span class="bold fw-bold">Population: </span>${obj[0].population}</p>
    <p class="text-card"><span class="bold fw-bold">Region: </span>${obj[0].region}</p>
    <p class="text-card"><span class="bold fw-bold">Subregion: </span>${obj[0].subregion}</p>
    <p class="text-card"><span class="bold fw-bold">Capital: </span>${obj[0].capital}</p>
    <div class="pt-3">
     <p class="text-card"><span class="bold fw-bold">Border Countries: </span> ${borderC?borderC:""} </p>
    </div>
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
    <p class="text-card"><span class="bold fw-bold">Top Level Domain: </span>${obj[0].tld}</p>
    <p class="text-card"><span class="bold fw-bold">Currencies : </span>${obj[0].currencies[moneda].name}</p>
    <p class="text-card"><span class="bold fw-bold">Languages: </span>${len?len:""}</p>
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
  mod.appendChild(cardm);
};

export default {
  cardN,
  showCards,
  cardM,
  showCard,
  $,
};
