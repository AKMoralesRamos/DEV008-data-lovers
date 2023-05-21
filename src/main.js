import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';




//*********************** SELECCIÓN DE PAÍSES **********************//

const countrySelect = document.getElementById("countrySelect");
const countrySelectb = data.countries.map((country => country.name.common));
countrySelectb.sort();
countrySelectb.forEach(function(pais) {
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
    if (country.languages.hasOwnProperty(languageCode)) {
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

data.countries.forEach(country => {
  country.timezones.forEach(timezone => {
    if (timezone !== "UTC") {
      timezonesSet.add(timezone);
    }
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

sortedTimezones.forEach(timezone => {
  const option = document.createElement('option');
  option.text = timezone;
  option.value = timezone;
  select.appendChild(option);
});

const countries = data.countries;

const rootElement = document.getElementById('root');

countries.forEach(country => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const imageElement = document.createElement('img');
  imageElement.src = country.flags.png;

  const nameElement = document.createElement('p');
  nameElement.textContent = country.name.common;
  cardElement.appendChild(nameElement);
  cardElement.appendChild(imageElement);
  rootElement.appendChild(cardElement);
});
// Obtener el elemento de la imagen
const imagen = document.getElementById("img");

// Establecer nuevas dimensiones
const nuevoAncho = 500;
const nuevoAlto = 200;

// Cambiar el tamaño de la imagen
imagen.style.width = nuevoAncho + "px";
imagen.style.height = nuevoAlto + "px";

/* console.log(example, data); */



