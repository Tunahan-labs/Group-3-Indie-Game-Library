import { useState } from "react";
import type { Product } from "./game.components";
import StarRating from "./StarRating";
import WishlistButton from "./WishListButton";
import GameModal from "./GameModel";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-3 right-3 z-10">
          <WishlistButton productId={product.id} />
        </div>

        <div
          className="w-full h-48 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              console.error(`Failed to load image: ${product.image}`);
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop";
            }}
          />
        </div>

        <div className="p-5">
          <div className="mb-3">
            <h2
              className="text-xl font-bold text-gray-900 dark:text-white mb-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              {product.name}
            </h2>

            <div className="mb-3">
              <StarRating rating={product.rating} />
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                {product.genre}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  product.platform === "PS5"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                }`}
              >
                {product.platform}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 px-4 py-2.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      <GameModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
