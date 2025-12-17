export interface Product {
  id: number;
  name: string;
  genre: string;
  platform: string;
  image: string;
  rating: number;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    image: "public/assets/HollowKnight.jpeg",
    rating: 5,
    description:
      "A beautiful, hand-drawn action-adventure through a vast ruined kingdom of insects and heroes.",
  },
  {
    id: 2,
    name: "Celeste",
    genre: "Platformer",
    platform: "PC",
    image: "public/assets/Celeste.jpeg",
    rating: 5,
    description:
      "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain.",
  },
  {
    id: 3,
    name: "Stardew Valley",
    genre: "Simulation",
    platform: "PC",
    image: "public/assets/Stardew.jpeg",
    rating: 4,
    description:
      "You've inherited your grandfather's old farm plot in Stardew Valley.",
  },
  {
    id: 4,
    name: "Undertale",
    genre: "RPG",
    platform: "PC",
    image: "public/assets/Undertale.jpeg",
    rating: 5,
    description:
      "UNDERTALE! The RPG game where you don't have to destroy anyone.",
  },
  {
    id: 5,
    name: "Dead Cells",
    genre: "Metroidvania",
    platform: "PC",
    image: "public/assets/DeadCells.jpeg",
    rating: 4,
    description: "Dead Cells is a rogue-lite, metroidvania action-platformer.",
  },
  {
    id: 6,
    name: "Cuphead",
    genre: "Platformer",
    platform: "PC",
    image: "public/assets/Cuphead.webp",
    rating: 4,
    description:
      "Cuphead is a classic run and gun action game heavily focused on boss battles.",
  },
  {
    id: 7,
    name: "Ghost of Yotei",
    genre: "Action-Adventure",
    platform: "PS5",
    image: "public/assets/GhostOfYotei.avif",
    rating: 5,
    description: "Explore feudal Japan in this epic action-adventure game.",
  },
  {
    id: 8,
    name: "Cities: Skylines II",
    genre: "Simulation",
    platform: "PS5",
    image: "public/assets/Cities-Skylines-II.webp",
    rating: 3,
    description: "The most realistic city builder ever.",
  },
  {
    id: 9,
    name: "Kena: Bridge of Spirits",
    genre: "Action-Adventure",
    platform: "PS5",
    image: "public/assets/Kena-BridgeOfSpirits.jpg",
    rating: 4,
    description:
      "A story-driven action adventure set in a charming world rich with exploration and fast-paced combat.",
  },
  {
    id: 10,
    name: "Demon's Souls",
    genre: "RPG",
    platform: "PS5",
    image: "public/assets/Demons-Souls.webp",
    rating: 5,
    description: "A faithful remake of the PlayStation classic, Demon's Souls.",
  },
  {
    id: 11,
    name: "Stray",
    genre: "Puzzle-Platformer",
    platform: "PS5",
    image: "public/assets/Stray.avif",
    rating: 4,
    description:
      "A third-person cat adventure game set amidst the detailed neon-lit alleys of a decaying cybercity.",
  },
  {
    id: 12,
    name: "It Takes Two",
    genre: "Puzzle-Platformer",
    platform: "PS5",
    image: "public/assets/ItTakesTwo.webp",
    rating: 5,
    description: "Embark on the craziest journey of your life in It Takes Two.",
  },
];
