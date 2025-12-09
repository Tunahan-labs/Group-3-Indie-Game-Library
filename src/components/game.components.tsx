import cupheadImage from "../assets/cuphead.webp";
import celesteImage from "../assets/celeste.avif";
import stardewValleyImage from "../assets/stardew-valley.jpg";
import undertaleImage from "../assets/undertale.webp";
import deadCellsImage from "../assets/dead-cells.jpg";
import hollowKnightImage from "../assets/hollow-night.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    image: hollowKnightImage,
  },
  {
    id: 2,
    name: "Celeste",
    genre: "Platformer",
    platform: "PC",
    image: celesteImage,
  },
  {
    id: 3,
    name: "Stardew Valley",
    genre: "Simulation",
    platform: "PC",
    image: stardewValleyImage,
  },
  {
    id: 4,
    name: "Undertale",
    genre: "RPG",
    platform: "PC",
    image: undertaleImage,
  },
  {
    id: 5,
    name: "Dead Cells",
    genre: "Metroidvania",
    platform: "PC",
    image: deadCellsImage,
  },
  {
    id: 6,
    name: "Cuphead",
    genre: "Run and Gun",
    platform: "PC",
    image: cupheadImage,
  },
];

export interface Product {
  id: number;
  name: string;
  genre: string;
  platform: string;
  image: string;
}
