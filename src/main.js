/* eslint-disable no-undef */
import { filtradoA, filtradoB, filtradoC, filtradoD, filtradoE, sortAZ} from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/countries/countries.js";
// import data from './data/rickandmorty/rickandmorty.js';

//*********************** SELECCIÓN DE PAÍSES **********************//

const countrySelect = document.getElementById("countrySelect");
const countrySelectb = data.countries.map((country) => country.name.common);
countrySelectb.sort();
countrySelectb.forEach(function (pais) {
  const opcion = document.createElement("option");
  opcion.value = pais;
  opcion.text = pais;
  countrySelect.appendChild(opcion);
});

//*********************** SELECCIÓN DE LENGUAJES **********************//

const languageSelect = document.getElementById("languageSelect");
const languagesSet = new Set();

data.countries.forEach(function (country) {
  for (const languageCode in country.languages) {
    if (languageCode in country.languages) {
      languagesSet.add(country.languages[languageCode]);
    }
  }
});

const languagesArray = Array.from(languagesSet);
languagesArray.sort();

languagesArray.forEach(function (language) {
  const option = document.createElement("option");
  option.value = language;
  option.text = language;
  languageSelect.appendChild(option);
});

//*********************** SELECCIÓN DE HUSOS HORARIOS **********************//

const select = document.getElementById("utcSelect");
const timezonesSet = new Set();

data.countries.forEach((country) => {
  country.timezones.forEach((timezone) => {
    timezonesSet.add(timezone);

  });
});

const sortedTimezones = Array.from(timezonesSet).sort((a, b) => {
  const getTimezoneOffset = (timezone) => {
    const sign = timezone.startsWith("UTC-") ? -1 : 1;
    const [hours, minutes] = timezone.slice(4).split(":").map(Number);
    return sign * (hours * 60 + minutes);
  };

  const offsetA = getTimezoneOffset(a);
  const offsetB = getTimezoneOffset(b);

  return offsetA - offsetB;
});

sortedTimezones.forEach((timezone) => {
  const option = document.createElement("option");
  option.text = timezone;
  option.value = timezone;
  select.appendChild(option);
});

//*********************** PRESENCIA DE TARJETAS EN EL ROOT **********************//
function showCountries(countries) {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";
  countries.forEach((country) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.addEventListener("click", () => {
      cardElement.classList.toggle("flipped");
    });

    const imageElement = document.createElement("img");
    imageElement.src = country.flags.png;

    const nameElement = document.createElement("p");
    nameElement.textContent = country.name.common;

    cardElement.appendChild(nameElement);
    cardElement.appendChild(imageElement);
    rootElement.appendChild(cardElement);
  });
}

showCountries(data.countries);
 /* function showCountries(countries) {

  const rootElement = document.getElementById("root");
  rootElement.innerHTML = " ";
  countries.forEach((country) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.src = country.flags.png;

    const nameElement = document.createElement("p");
    nameElement.textContent = country.name.common;

    cardElement.appendChild(nameElement);
    cardElement.appendChild(imageElement);
    rootElement.appendChild(cardElement);
  });
  
}

showCountries(data.countries);  */

//*********************** FUNCIONES DE FILTRADO **********************//


const boton = document.getElementById("filtrar");
boton.addEventListener("click", filtrandoDatos);
let dataCountries = data.countries;
function filtrandoDatos() {
  const selPais = document.getElementById("countrySelect").value;
  const selContinent = document.getElementById("continenteSelect").value;
  const selLanguages = document.getElementById("languageSelect").value;
  const selUtc = document.getElementById("utcSelect").value;
  const selIndep = document.getElementById("indepSelect").value;
  
  if (selPais !== "") {
    dataCountries = filtradoB(data.countries, selPais);
    showCountries(dataCountries);
    console.log(dataCountries);
  
  } if(selContinent !== "") {
    dataCountries = filtradoA(data.countries, selContinent);
    showCountries(dataCountries);
    console.log(dataCountries);

  } if(selLanguages !== "") {
    dataCountries = filtradoC(data.countries, selLanguages);
    showCountries(dataCountries);
    console.log(dataCountries);

  } if(selUtc !== "") {
    dataCountries = filtradoD(data.countries, selUtc);
    console.log(dataCountries);
    showCountries(dataCountries);

  } if(selIndep !== "") {
    dataCountries = filtradoE(data.countries, selIndep);
    console.log(dataCountries);
    showCountries(dataCountries);
  } 
}

//*********************** FUNCIONES DE ORDENADO **********************//

const dataOrdenada = sortAZ(dataCountries);
showCountries(dataOrdenada);

