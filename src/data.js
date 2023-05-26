// estas funciones son de ejemplo

export const filtradoA = (data, continente) => {
  return data.filter(country => country.continents.includes(continente));
};

export const filtradoB = (data, pais) => {
  return data.filter(country => country.name.common === pais);
};

/* export const filtradoT = (data, lenguaje) => {
  return data.filter(country => country.languages.some(languageCode => languageCode === lenguaje));
} */

export const filtradoC = (data, lenguaje) => {
  return data.filter((country) => {
    for (const languageCode in country.languages) {
      if (country.languages[languageCode] === lenguaje) {
        return true;
      }
    }
    return false;
  });
};


export const filtradoD = (data, utc) => {
  return data.filter(country => country.timezones.includes(utc));
}
 
export const filtradoE = (data, independiente) => {
  const esIndependiente = independiente === "true"; 
  const filteredCountries = data.filter(country => country.independent === esIndependiente);
  return filteredCountries;
}

/* return data.filter(country => country.independent === (independiente === "true" && independiente === "false")); */
/* export const anotherExample = () => {
  return 'OMG';
}; */

