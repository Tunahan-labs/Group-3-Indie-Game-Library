export const products: Product[] = [
  {
    id: 1,
    name: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    image: "/public/assets/HollowKnight.jpeg",
  },
  {
    id: 2,
    name: "Celeste",
    genre: "Platformer",
    platform: "PC",
    image: "/public/assets/Celeste.jpeg",
  },
  {
    id: 3,
    name: "Stardew Valley",
    genre: "Simulation",
    platform: "PC",
    image: "/public/assets/Stardew.jpeg",
  },
  {
    id: 4,
    name: "Undertale",
    genre: "RPG",
    platform: "PC",
    image: "/public/assets/Undertale.jpeg",
  },
  {
    id: 5,
    name: "Dead Cells",
    genre: "Metroidvania",
    platform: "PC",
    image: "/public/assets/DeadCells.jpeg",
  },
  {
    id: 6,
    name: "Cuphead",
    genre: "Run and Gun",
    platform: "PC",
    image: "/public/assets/Cuphead.webp",
  },
];

export interface Product {
  id: number;
  name: string;
  genre: string;
  platform: string;
  image: string;
}
