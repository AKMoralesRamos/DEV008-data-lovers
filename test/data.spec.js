import {filtradoB, filtradoAnidado, sortAZ, sortZA } from "../src/data.js";
const pais = [
  {
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
    },
    tld: [".gt"],
    independent: true,
    capital: ["Guatemala City"],
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    borders: ["BLZ", "SLV", "HND", "MEX"],
    area: 108889,
    flag: "🇬🇹",
    population: 16858333,
    gini: {
      2014: 48.3,
    },
    fifa: "GUA",
    timezones: ["UTC-06:00"],
    continents: ["America"],
    flags: {
      png: "https://flagcdn.com/w320/gt.png",
      svg: "https://flagcdn.com/gt.svg",
      alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.",
    },
  },
];

describe("Test funcion filtrar", () => {
  it("filtradoB es una funcion", () => {
    expect(typeof filtradoB).toBe("function");
  });

  it("filtra el array segun el pais indicado", () => {
    expect(filtradoB(pais, "Guatemala")).toStrictEqual([
      {
        name: {
          common: "Guatemala",
          official: "Republic of Guatemala",
        },
        tld: [".gt"],
        independent: true,
        capital: ["Guatemala City"],
        subregion: "Central America",
        languages: {
          spa: "Spanish",
        },
        borders: ["BLZ", "SLV", "HND", "MEX"],
        area: 108889,
        flag: "🇬🇹",
        population: 16858333,
        gini: {
          2014: 48.3,
        },
        fifa: "GUA",
        timezones: ["UTC-06:00"],
        continents: ["America"],
        flags: {
          png: "https://flagcdn.com/w320/gt.png",
          svg: "https://flagcdn.com/gt.svg",
          alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.",
        },
      },
    ]);
  });
});

describe("Test funcion filtradoAnidado", () => {
  it("filtradoAnidado es una funcion", () => {
    expect(typeof filtradoAnidado).toBe("function");
  });
});

describe("Test funcion sortAZ", () => {
  it("sortAZ es una funcion", () => {
    expect(typeof sortAZ).toBe("function");
  });
});

describe("Test funcion sortZA", () => {
  it("sortZA es una funcion", () => {
    expect(typeof sortZA).toBe("function");
  });
});

/* it('returns `example`', () => {
    expect(example()).toBe('example');
  }); */

/*  describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
