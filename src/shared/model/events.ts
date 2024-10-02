import { CategorieType, CategoriesIds } from "./types";

const science: CategorieType = {
  id: CategoriesIds.Science,
  events: [
    {
      year: 2015,
      text: "science.2015",
    },
    {
      year: 2016,
      text: "science.2016",
    },
    {
      year: 2017,
      text: "science.2017",
    },
    {
      year: 2018,
      text: "science.2018",
    },
    {
      year: 2019,
      text: "science.2019",
    },
    {
      year: 2020,
      text: "science.2020",
    },
    {
      year: 2021,
      text: "science.2021",
    },
    {
      year: 2022,
      text: "science.2022",
    },
  ],
};

const literature: CategorieType = {
  id: CategoriesIds.Literature,
  events: [
    {
      year: 1992,
      text: "literature.1992",
    },
    {
      year: 1993,
      text: "literature.1993",
    },
    {
      year: 1994,
      text: "literature.1994",
    },
    {
      year: 1995,
      text: "literature.1995",
    },
    {
      year: 1996,
      text: "literature.1996",
    },
    {
      year: 1997,
      text: "literature.1997",
    },
  ],
};

const theater: CategorieType = {
  id: CategoriesIds.Theater,
  events: [
    {
      year: 1999,
      text: "theater.1999",
    },
    {
      year: 2000,
      text: "theater.2000",
    },
    {
      year: 2001,
      text: "theater.2001",
    },
    {
      year: 2002,
      text: "theater.2002",
    },
    {
      year: 2003,
      text: "theater.2003",
    },
    {
      year: 2004,
      text: "theater.2004",
    },
  ],
};

const cinema: CategorieType = {
  id: CategoriesIds.Cinema,
  events: [
    {
      year: 1987,
      text: "cinema.1987",
    },
    {
      year: 1988,
      text: "cinema.1988",
    },
    {
      year: 1989,
      text: "cinema.1989",
    },
    {
      year: 1990,
      text: "cinema.1990",
    },
    {
      year: 1991,
      text: "cinema.1991",
    },
  ],
};

const painting: CategorieType = {
  id: CategoriesIds.Painting,
  events: [
    {
      year: 2005,
      text: "painting.2005",
    },
    {
      year: 2006,
      text: "painting.2006",
    },
    {
      year: 2007,
      text: "painting.2007",
    },
    {
      year: 2008,
      text: "painting.2008",
    },
    {
      year: 2009,
      text: "painting.2009",
    },
    {
      year: 2010,
      text: "painting.2010",
    },
  ],
};

const architecture: CategorieType = {
  id: CategoriesIds.Architecture,
  events: [
    {
      year: 2011,
      text: "architecture.2011",
    },
    {
      year: 2012,
      text: "architecture.2012",
    },
    {
      year: 2013,
      text: "architecture.2013",
    },
    {
      year: 2014,
      text: "architecture.2014",
    },
  ],
};

const categories: CategorieType[] = [
  cinema,
  literature,
  theater,
  painting,
  architecture,
  science,
];

export default categories;
