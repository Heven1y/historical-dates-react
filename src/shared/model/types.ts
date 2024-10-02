export enum CategoriesIds {
  Science = "Science",
  Cinema = "Cinema",
  Literature = "Literature",
  Theater = "Theater",
  Painting = "Painting",
  Architecture = "Architecture",
}

export type EventElementType = {
  year: number;
  text: string;
};

export type CategorieType = {
  id: CategoriesIds;
  events: EventElementType[];
};
