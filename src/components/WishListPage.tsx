
import React, { useState, useEffect } from "react";
import { products } from "./game.components";
import type { Product } from "./game.components";
import ProductCard from "./Product-Card.Component";

interface WishlistPageProps {
  setCurrentPage: (page: "games" | "wishlist") => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ setCurrentPage }) => {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load wishlist from localStorage
    const loadWishlist = () => {
      const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const wishlistItems = products.filter(product => 
        wishlistIds.includes(product.id)
      );
      setWishlistProducts(wishlistItems);
      setIsLoading(false);
    };

    loadWishlist();
    
    // Listen for storage changes
    const handleStorageChange = () => loadWishlist();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const clearWishlist = () => {
    localStorage.setItem('wishlist', JSON.stringify([]));
    setWishlistProducts([]);
  };

  const goToGames = () => {
    setCurrentPage("games");
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
            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'game' : 'games'} in your wishlist
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={goToGames}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Games
          </button>
          {wishlistProducts.length > 0 && (
            <button
              onClick={clearWishlist}
              className="px-4 py-2 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
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
                {new Set(wishlistProducts.map(p => p.platform)).size}
              </div>
              <div className="text-sm text-green-800 dark:text-green-300">
                Platforms
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {new Set(wishlistProducts.map(p => p.genre)).size}
              </div>
              <div className="text-sm text-purple-800 dark:text-purple-300">
                Genres
              </div>
            </div>
          </div>

          {/* Average Rating */}
          <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Wishlist Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {wishlistProducts.length > 0 
                    ? (wishlistProducts.reduce((sum, game) => sum + game.rating, 0) / wishlistProducts.length).toFixed(1)
                    : "0.0"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average Rating
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {wishlistProducts.filter(g => g.rating >= 4).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Highly Rated (4+)
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {wishlistProducts.filter(g => g.platform === "PC").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  PC Games
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                  {wishlistProducts.filter(g => g.platform === "PS5").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  PS5 Games
                </div>
              </div>
            </div>
          </div>

          {/* Games Grid */}
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
          <button
            onClick={goToGames}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Browse Games
          </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
