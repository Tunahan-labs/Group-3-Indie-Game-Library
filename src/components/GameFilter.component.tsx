import React, { useState } from "react";
import { products } from "./game.components";
import ProductCard from "./Product-Card.Component";

const GameFilter: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const genres = Array.from(new Set(products.map((p) => p.genre)));
  const platforms = Array.from(new Set(products.map((p) => p.platform)));
  const sortOptions = ["asc", "desc"];

  const filteredProducts = products.filter((product) => {
    const genreMatch = selectedGenre ? product.genre === selectedGenre : true;
    const platformMatch = selectedPlatform
      ? product.platform === selectedPlatform
      : true;
    const searchMatch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.platform.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return genreMatch && platformMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const clearAllFilters = () => {
    setSelectedGenre("");
    setSelectedPlatform("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto p-4 m-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Game Collection</h1>

      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search games by name, genre, or platform..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>

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
        <div>
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

      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Showing {sortedProducts.length} of {products.length} games
          {(selectedGenre || selectedPlatform || searchTerm || sortOrder) && (
            <span className="ml-4">
              <button
                onClick={clearAllFilters}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Clear all filters
              </button>
            </span>
          )}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-sm text-red-600">
            No games found. Try adjusting your filters.
          </div>
        )}
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-xl font-semibold mb-2">No games found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Show all games
          </button>
        </div>
      )}
    </div>
  );
};

export default GameFilter;
