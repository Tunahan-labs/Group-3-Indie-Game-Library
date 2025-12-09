export const products: Product[] = [
  { id: 1, name: "Hollow Knight", genre: "Metroidvania", platform: "PC" },
  { id: 2, name: "Celeste", genre: "Platformer", platform: "PC" },
  { id: 3, name: "Stardew Valley", genre: "Simulation", platform: "PC" },
  { id: 4, name: "Undertale", genre: "RPG", platform: "PC" },
  { id: 5, name: "Dead Cells", genre: "Metroidvania", platform: "PC" },
];

export interface Product {
  id: number;
  name: string;
  genre: string;
  platform: string;
}
