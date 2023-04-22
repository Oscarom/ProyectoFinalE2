import data from "./data.js";
import dom from "./dom.js";



const URL = "https://restcountries.com/v3.1/all";
const html = dom.$("html")
const darkButton = dom.$(".dark")
const inputBuscar = dom.$("#input-buscar")
const btnDesp = dom.$(".btn-desplegable")
const africa = dom.$(".africa");
const america = dom.$(".america");
const asia = dom.$(".asia");
const europa = dom.$(".europa");
const oceania = dom.$(".oceania");
const all = dom.$(".all")
const datos = await data.getData(URL);

let filtro = ""



darkButton.addEventListener("click",
()=>{
    html.dataset.bsTheme= html.dataset.bsTheme == "dark"?"ligth":"dark"
})


inputBuscar.addEventListener("keyup", () => {
    filtro = inputBuscar.value;
    const filtered = filtro === "" ? datos : data.filterByName(datos, filtro);
    dom.showCards(filtered);
  });

africa.addEventListener("click", () => {
 filtro = "africa";
 const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
 dom.showCards(filtered);
 btnDesp.innerHTML = "Africa" 
});

america.addEventListener("click", () => {
  filtro = "america";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "America" 
 });

 asia.addEventListener("click", () => {
  filtro = "asia";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "Asia" 
 });

 europa.addEventListener("click", () => {
  filtro = "europe";
  const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
  dom.showCards(filtered);
  btnDesp.innerHTML = "Europa" 
 });

 oceania.addEventListener("click", () => {
 filtro = "oceania";
 const filtered = filtro === "" ? datos : data.filterByRegion(datos, filtro);
 dom.showCards(filtered);
 btnDesp.innerHTML = "Oceania" 
});

all.addEventListener("click", () => {
  dom.showCards(datos);
  btnDesp.innerHTML = "All" 
 });

dom.showCards(datos);