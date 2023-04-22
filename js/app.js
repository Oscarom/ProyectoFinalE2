import data from "./data.js";
import dom from "./dom.js";



const URL = "https://restcountries.com/v3.1/all";
const html = dom.$("html")
const darkButton = dom.$(".dark")
const inputBuscar = dom.$("#input-buscar")
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

dom.showCards(datos);