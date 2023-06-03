/* eslint-disable no-undef */
import { filtradoA, filtradoB, filtradoC, filtradoD, filtradoE, sortAZ, sortZA} from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/countries/countries.js";
// import data from './data/rickandmorty/rickandmorty.js';

const countries = data.countries;

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
  languagesSet.add("todos");
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
      openModal(country);
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

//*********************** FUNCIONES PARA MODAL **********************//

function openModal(country) {
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");

  modalTitle.textContent = country.name.official;
  modalImage.src = country.flags.png;
  modal.style.display = "block";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

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
    dataCountries = filtradoC(data.countries, selLanguages, selContinent);
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

const sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", ordenandoDatos);

function ordenandoDatos() {
  const selectedOption = document.getElementById("ordenar").value;

  if (selectedOption === "1") {
    const dataAz = sortAZ(dataCountries);
    return showCountries(dataAz);
  } else if (selectedOption === "2") {
    const dataZa = sortZA(dataCountries);
    return showCountries(dataZa);
  }
}

//*********************** FUNCIONES DE BÚSQUEDA GENERAL **********************//

// Función para buscar en claves adicionales
function searchInCountryKeys(country, searchTerm) {
  // Agregar las claves adicionales para buscar aquí
  const keysToSearch = ["capital","subregion", "area"];
    
  for (let i = 0; i < keysToSearch.length; i++) {
    const key = keysToSearch[i];
    
    if (country[key] && country[key].toString().toLowerCase().includes(searchTerm)) {
      return true;
    }
  }
    
  // Buscar en la clave "languages"
  if (country.languages) {
    for (const langKey in country.languages) {
      const language = country.languages[langKey].toString().toLowerCase();
      if (language.includes(searchTerm)) {
        return true;
      }
    }
  }
  // Buscar en el rango de la clave "population"
  if (searchTerm.includes(">")) {
    const minPopulation = searchTerm.substring(1);
    if (country.population && parseInt(country.population) > parseInt(minPopulation)) {
      return true;
    }
  } else if (searchTerm.includes("<")) {
    const maxPopulation = searchTerm.substring(1);
    if (country.population && parseInt(country.population) < parseInt(maxPopulation)) {
      return true;
    }
  } else if (searchTerm.includes("-")) {
    const rangeValues = searchTerm.split("-");
    const minRange = rangeValues[0];
    const maxRange = rangeValues[1];
    if (
      country.population &&
        parseInt(country.population) >= parseInt(minRange) &&
        parseInt(country.population) <= parseInt(maxRange)
    ) {
      return true;
    }
  }
  
  return false;
}
  
// Obtener elementos del DOM
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");
  
// Función de búsqueda
function search() {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const countryName = country.name.common;

    // Buscar en el nombre del país y en otras claves
    if (countryName.includes(searchTerm) || searchInCountryKeys(country, searchTerm)) {
      const result = document.createElement("div");
      result.classList.add("country-result");
      
      const table = document.createElement("table");
      const row = table.insertRow();
      
      const countryNameCell = row.insertCell();
      countryNameCell.innerHTML = "<h3>" + countryName + "</h3>";
      countryNameCell.colSpan = 2;

      for (const prop in country) {
        if (typeof country[prop] !== "object") {
          const newRow = table.insertRow();
          const propCell = newRow.insertCell();
          const valueCell = newRow.insertCell();
          
          propCell.innerHTML = "<strong>" + prop + "</strong>";
          valueCell.innerHTML = country[prop];
        }
      }

      result.appendChild(table);
      searchResults.appendChild(result);
    }
  }
}

  
// Evento click del botón de búsqueda
searchButton.addEventListener("click", search);