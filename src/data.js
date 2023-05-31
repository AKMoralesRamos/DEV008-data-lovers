// estas funciones son de ejemplo

export const filtradoA = (data, continente) => {
  return data.filter(country => country.continents.includes(continente));
};

export const filtradoB = (data, pais) => {
  return data.filter(country => country.name.common === pais);
};

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
};
 
export const filtradoE = (data, independiente) => {
  const esIndependiente = independiente === "true"; 
  const filteredCountries = data.filter(country => country.independent === esIndependiente);
  return filteredCountries;
};


export const sortAZ = (countries) => {
  countries.sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return countries;
};

export const sortZA = (countries) => {
  countries.sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();

    if (nameB < nameA) {
      return -1;
    }
    if (nameB > nameA) {
      return 1;
    }
    return 0;
  });

  return countries;
};



