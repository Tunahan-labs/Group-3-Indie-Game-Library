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
    genre: "Platformer",
    platform: "PC",
    image: "/public/assets/Cuphead.webp",
  },
  {
    id: 7,
    name: "Ghost of Yotei",
    genre: "Action-Adventure",
    platform: "PS5",
    image: "/public/assets/GhostOfYotei.avif",
  },
  {
    id: 8,
    name: "Cities: Skylines II",
    genre: "Simulation",
    platform: "PS5",
    image: "/public/assets/Cities-Skylines-II.webp",
  },
  {
    id: 9,
    name: "Kena: Bridge of Spirits",
    genre: "Action-Adventure",
    platform: "PS5",
    image: "/public/assets/Kena-BridgeOfSpirits.jpg",
  },
  {
    id: 10,
    name: "Demon's Souls",
    genre: "RPG",
    platform: "PS5",
    image: "/public/assets/Demons-Souls.webp",
  },
  {
    id: 11,
    name: "Stray",
    genre: "Puzzle-Platformer",
    platform: "PS5",
    image: "/public/assets/Stray.avif",
  },
  {
    id: 12,
    name: "It Takes Two",
    genre: "Puzzle-Platformer",
    platform: "PS5",
    image: "/public/assets/ItTakesTwo.webp",
  },
];

export interface Product {
  id: number;
  name: string;
  genre: string;
  platform: string;
  image: string;
}
