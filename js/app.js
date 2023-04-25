import data from "./data.js";
import dom from "./dom.js";

const URL = "https://restcountries.com/v3.1/all";
const html = dom.$("html");
const darkButton = dom.$(".dark");

const inputBuscar = dom.$("#input-buscar");
const btnDesp = dom.$(".btn-desplegable");
const africa = dom.$(".africa");
const america = dom.$(".america");
const asia = dom.$(".asia");
const europa = dom.$(".europa");
const oceania = dom.$(".oceania");
const all = dom.$(".all");
const datos = await data.getData(URL);

let filtro = "";

darkButton.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "ligth" : "dark";
});



inputBuscar.addEventListener("keyup", () => {
  filtro = inputBuscar.value;
  const filtered = filtro === "" ? datos : data.filterByName(datos, filtro);
  dom.showCards(filtered);
  cardModule();
});

africa.addEventListener("click", () => {
  filtro = "africa";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "Africa";
  cardModule();
});

america.addEventListener("click", () => {
  filtro = "america";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "America";
  cardModule();
});

asia.addEventListener("click", () => {
  filtro = "asia";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "Asia";
  cardModule();
});

europa.addEventListener("click", () => {
  filtro = "europe";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "Europa";
  cardModule();
});

oceania.addEventListener("click", () => {
  filtro = "oceania";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "Oceania";
  cardModule();
});

all.addEventListener("click", () => {
  dom.showCards(datos);
  btnDesp.innerHTML = "All";
  cardModule();
});

dom.showCards(datos);

function cardModule() {
  let cardM = document.querySelectorAll(".card-m");

  for (let i = 0; i < cardM.length; i++) {
    cardM[i].addEventListener("click", function () {
      let filtro = cardM[i].id;
      console.log(filtro);
      const filtered = filtro === "" ? datos : data.filterOne(datos, filtro);
      dom.showCard(filtered);
    });
  }
}
cardModule();
export default{
  datos
}
