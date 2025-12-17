import React from "react";
import type { Product } from "./game.components";
import StarRating from "./StarRating";
import WishlistButton from "./WishListButton";

interface GameModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full min-h-[400px]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <WishlistButton productId={product.id} size="lg" />
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <StarRating rating={product.rating} size="lg" showNumber />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                    {product.genre}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                    {product.platform}
                  </span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description || "No description available."}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Add to Library
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
