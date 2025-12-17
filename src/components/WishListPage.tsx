import React, { useState, useEffect } from "react";
import { products } from "./game.components";
import type { Product } from "./game.components";
import ProductCard from "./Product-Card.Component";
import { Link } from "react-router-dom";

const WishlistPage: React.FC = () => {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = () => {
      const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const wishlistItems = products.filter((product) =>
        wishlistIds.includes(product.id)
      );
      setWishlistProducts(wishlistItems);
      setIsLoading(false);
    };

    loadWishlist();

    const handleStorageChange = () => loadWishlist();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const clearWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify([]));
    setWishlistProducts([]);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {wishlistProducts.length}{" "}
            {wishlistProducts.length === 1 ? "game" : "games"} in your wishlist
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            ← Back to Games
          </Link>
          {wishlistProducts.length > 0 && (
            <button
              onClick={clearWishlist}
              className="px-4 py-2 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {wishlistProducts.length > 0 ? (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {wishlistProducts.length}
              </div>
              <div className="text-sm text-blue-800 dark:text-blue-300">
                Total Games
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {new Set(wishlistProducts.map((p) => p.platform)).size}
              </div>
              <div className="text-sm text-green-800 dark:text-green-300">
                Platforms
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {new Set(wishlistProducts.map((p) => p.genre)).size}
              </div>
              <div className="text-sm text-purple-800 dark:text-purple-300">
                Genres
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">❤️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Start building your collection by adding games you're interested in!
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Browse Games
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
