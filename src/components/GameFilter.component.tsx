import React, { useState } from "react";
import { products } from "./game.components";
import ProductCard from "./Product-Card.Component";

const GameFilter: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  // Get unique genres and platforms for dropdowns
  const genres = Array.from(new Set(products.map((p) => p.genre)));
  const platforms = Array.from(new Set(products.map((p) => p.platform)));
  const sortOptions = ["asc", "desc"];

  // Filter products based on selected genre and platform
  const filteredProducts = products.filter((product) => {
    const genreMatch = selectedGenre ? product.genre === selectedGenre : true;
    const platformMatch = selectedPlatform
      ? product.platform === selectedPlatform
      : true;
    return genreMatch && platformMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4 m-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Game Collection</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Genre:
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="block w-48 rounded-md border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Platform:
          </label>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="block w-48 rounded-md border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All Platforms</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="block w-48 rounded-md border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Default</option>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option === "asc" ? "A-Z" : "Z-A"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GameFilter;
