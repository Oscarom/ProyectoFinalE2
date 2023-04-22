import data from "./data.js";
import dom from "./dom.js";
const URL = "https://restcountries.com/v3.1/all";
const html = dom.$("html")
const darkButton = dom.$(".dark") 

darkButton.addEventListener("click",
()=>{
    html.dataset.bsTheme= html.dataset.bsTheme == "dark"?"ligth":"dark"
})


const datos = await data.getData(URL);


dom.showCards(datos);