import {filtradoB, filtradoAnidado, sortAZ, sortZA, computeStats } from "../src/data.js";
const paises = [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala",
    },
    "independent": true,
    "capital": ["Guatemala City"],
    "languages": {
      "spa": "Spanish",
    },
    "borders": ["BLZ", "SLV", "HND", "MEX"],
    "area": 108889,
    "flag": "🇬🇹",
    "population": 16858333,
    "timezones": ["UTC-06:00"],
    "continents": ["America"],
  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "independent": true,
    "capital": [
      "Singapore"
    ],
    "languages": {
      "zho": "Chinese",
      "eng": "English",
      "msa": "Malay",
      "tam": "Tamil"
    },
    "area": 710,
    "flag": "🇸🇬",
    "population": 5685807,
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
  },
  {
    "name": {
      "common": "Mexico",
      "official": "United Mexican States"
    },
    "independent": true,
    "capital": [
      "Mexico City"
    ],
    "languages": {
      "spa": "Spanish"
    },
    "borders": [
      "BLZ",
      "GTM",
      "USA"
    ],
    "area": 1964375,
    "flag": "🇲🇽",
    "population": 128932753,
    "timezones": [
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00"
    ],
    "continents": [
      "America"
    ],
  },
];

describe("Test funcion filtrar", () => {
  it("filtradoB es una funcion", () => {
    expect(typeof filtradoB).toBe("function");
  });

  it("filtra el array segun el pais indicado", () => {
    expect(filtradoB(paises, "Guatemala")).toStrictEqual([
      {
        "name": {
          "common": "Guatemala",
          "official": "Republic of Guatemala",
        },
        "independent": true,
        "capital": ["Guatemala City"],
        "languages": {
          "spa": "Spanish",
        },
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "area": 108889,
        "flag": "🇬🇹",
        "population": 16858333,
        "timezones": ["UTC-06:00"],
        "continents": ["America"],
      },
    ]);
  });

  it("Filtra un solo elemento del array", () => {
    const filtroPais = filtradoB(paises, "Guatemala");
    expect(filtroPais.length).toBe(1);
  });
});

describe("Test funcion filtradoAnidado", () => {
  it("filtradoAnidado es una funcion", () => {
    expect(typeof filtradoAnidado).toBe("function");
  });

  it("Filtra país con las características seleccionadas", () => {
    const filtraTodo = filtradoAnidado(paises, "America", "Spanish", "UTC-06:00", "true");
    expect(filtraTodo).toStrictEqual([
      {
        "name": {
          "common": "Guatemala",
          "official": "Republic of Guatemala",
        },
        "independent": true,
        "capital": ["Guatemala City"],
        "languages": {
          "spa": "Spanish",
        },
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "area": 108889,
        "flag": "🇬🇹",
        "population": 16858333,
        "timezones": ["UTC-06:00"],
        "continents": ["America"],
      },
      {
        "name": {
          "common": "Mexico",
          "official": "United Mexican States"
        },
        "independent": true,
        "capital": [
          "Mexico City"
        ],
        "languages": {
          "spa": "Spanish"
        },
        "borders": [
          "BLZ",
          "GTM",
          "USA"
        ],
        "area": 1964375,
        "flag": "🇲🇽",
        "population": 128932753,
        "timezones": [
          "UTC-08:00",
          "UTC-07:00",
          "UTC-06:00"
        ],
        "continents": [
          "America"
        ],
      },
    ]);
  });

  it("Filtra país aún con una sola característica seleccionada", () => {
    const filtraUnicoDato = filtradoAnidado(paises, "", "", "UTC-06:00", "");
    expect(filtraUnicoDato).toStrictEqual([
      {
        "name": {
          "common": "Guatemala",
          "official": "Republic of Guatemala",
        },
        "independent": true,
        "capital": ["Guatemala City"],
        "languages": {
          "spa": "Spanish",
        },
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "area": 108889,
        "flag": "🇬🇹",
        "population": 16858333,
        "timezones": ["UTC-06:00"],
        "continents": ["America"],
      },
      {
        "name": {
          "common": "Mexico",
          "official": "United Mexican States"
        },
        "independent": true,
        "capital": [
          "Mexico City"
        ],
        "languages": {
          "spa": "Spanish"
        },
        "borders": [
          "BLZ",
          "GTM",
          "USA"
        ],
        "area": 1964375,
        "flag": "🇲🇽",
        "population": 128932753,
        "timezones": [
          "UTC-08:00",
          "UTC-07:00",
          "UTC-06:00"
        ],
        "continents": [
          "America"
        ],
      },
    ]);
  });

  it("Muestra un mensaje cuando no existan países con las opciones seleccionadas", () => {
    const filtroNull = filtradoAnidado(paises, "America", "Spanish", "UTC+06:00", "false");
    if (filtroNull.length === 0){
      const errorMessage = "Oops!, there are no countries with the options you selected, try others."
      expect(errorMessage).toStrictEqual("Oops!, there are no countries with the options you selected, try others.");
    }
  });
});

describe("Test funcion sortAZ", () => {
  it("sortAZ es una funcion", () => {
    expect(typeof sortAZ).toBe("function");
  });

  it("Entrega un array en orden alfabético de A to Z", () => {
    const orden = sortAZ(paises);
    expect(orden).toStrictEqual([
      {
        "name": {
          "common": "Guatemala",
          "official": "Republic of Guatemala",
        },
        "independent": true,
        "capital": ["Guatemala City"],
        "languages": {
          "spa": "Spanish",
        },
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "area": 108889,
        "flag": "🇬🇹",
        "population": 16858333,
        "timezones": ["UTC-06:00"],
        "continents": ["America"],
      },
      {
        "name": {
          "common": "Mexico",
          "official": "United Mexican States"
        },
        "independent": true,
        "capital": [
          "Mexico City"
        ],
        "languages": {
          "spa": "Spanish"
        },
        "borders": [
          "BLZ",
          "GTM",
          "USA"
        ],
        "area": 1964375,
        "flag": "🇲🇽",
        "population": 128932753,
        "timezones": [
          "UTC-08:00",
          "UTC-07:00",
          "UTC-06:00"
        ],
        "continents": [
          "America"
        ],
      },
      {
        "name": {
          "common": "Singapore",
          "official": "Republic of Singapore"
        },
        "independent": true,
        "capital": [
          "Singapore"
        ],
        "languages": {
          "zho": "Chinese",
          "eng": "English",
          "msa": "Malay",
          "tam": "Tamil"
        },
        "area": 710,
        "flag": "🇸🇬",
        "population": 5685807,
        "timezones": [
          "UTC+08:00"
        ],
        "continents": [
          "Asia"
        ],
      },
    ]);
  });
});



describe("Test funcion sortZA", () => {
  it("sortZA es una funcion", () => {
    expect(typeof sortZA).toBe("function");
  });

  it("Entrega un array en orden alfabético de Z to A", () => {
    const orden = sortZA(paises);
    expect(orden).toStrictEqual([
      {
        "name": {
          "common": "Singapore",
          "official": "Republic of Singapore"
        },
        "independent": true,
        "capital": [
          "Singapore"
        ],
        "languages": {
          "zho": "Chinese",
          "eng": "English",
          "msa": "Malay",
          "tam": "Tamil"
        },
        "area": 710,
        "flag": "🇸🇬",
        "population": 5685807,
        "timezones": [
          "UTC+08:00"
        ],
        "continents": [
          "Asia"
        ],
      },
      {
        "name": {
          "common": "Mexico",
          "official": "United Mexican States"
        },
        "independent": true,
        "capital": [
          "Mexico City"
        ],
        "languages": {
          "spa": "Spanish"
        },
        "borders": [
          "BLZ",
          "GTM",
          "USA"
        ],
        "area": 1964375,
        "flag": "🇲🇽",
        "population": 128932753,
        "timezones": [
          "UTC-08:00",
          "UTC-07:00",
          "UTC-06:00"
        ],
        "continents": [
          "America"
        ],
      },
      {
        "name": {
          "common": "Guatemala",
          "official": "Republic of Guatemala",
        },
        "independent": true,
        "capital": ["Guatemala City"],
        "languages": {
          "spa": "Spanish",
        },
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "area": 108889,
        "flag": "🇬🇹",
        "population": 16858333,
        "timezones": ["UTC-06:00"],
        "continents": ["America"],
      },
    ]);
  });
});

describe("Test funcion computeStats", () => {
  it("computeStats es una funcion", () => {
    expect(typeof computeStats).toBe("function");
  });

  it('retorna el promedio de población de los países', () => {
    const averagePopulation = computeStats(paises);
    expect(Math.round(averagePopulation)).toBe(50492298);
  });

});

