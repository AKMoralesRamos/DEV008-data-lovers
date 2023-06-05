// estas funciones son de ejemplo
export const filtradoB = (data, pais) => {
  return data.filter(country => country.name.common === pais);
};

export const filtradoAnidado = (data, continente, lenguaje, utc, independiente) => {
  return data.filter((country) => {
    if (continente && !country.continents.includes(continente)) {
      return false;
    }
    if (lenguaje) {
      let languageMatch = false;
      for (const languageCode in country.languages) {
        if (country.languages[languageCode] === lenguaje) {
          languageMatch = true;
          break;
        }
      }
      if (!languageMatch) {
        return false;
      }
    }
    if (utc && !country.timezones.includes(utc)) {
      return false;
    }
    if (independiente && country.independent !== (independiente === "true")) {
      return false;
    }
    return true;
  });
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
