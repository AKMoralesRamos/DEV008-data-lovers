// estas funciones son de ejemplo

export const filtradoU = (data, continente) => {
  return data.filter(country => country.continents.includes(continente));
};

export const filtradoD = (data, pais) => {
  return data.filter(country => country.name.common === pais);
};


 

export const anotherExample = () => {
  return 'OMG';
};

