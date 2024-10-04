export enum CategoriesIds {
  Science = "science",
  Cinema = "cinema",
  Literature = "literature",
  Theater = "theater",
  Painting = "painting",
  Architecture = "architecture",
}

export type EventElementType = {
  year: number;
  text: string;
};

export type CategorieType = {
  id: CategoriesIds;
  events: EventElementType[];
};
