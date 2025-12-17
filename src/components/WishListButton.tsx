import React, { useState } from "react";

interface WishlistButtonProps {
  productId: number;
  initialInWishlist?: boolean;
  size?: "sm" | "md" | "lg";
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  productId,
  initialInWishlist = false,
  size = "md",
}) => {
  const [inWishlist, setInWishlist] = useState(initialInWishlist);

  const sizeClasses = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3",
  };

  const iconSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const toggleWishlist = () => {
    const currentWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    if (inWishlist) {
      const updatedWishlist = currentWishlist.filter(
        (id: number) => id !== productId
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...currentWishlist, productId];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }

    setInWishlist(!inWishlist);
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`${sizeClasses[size]} rounded-full transition-colors ${
        inWishlist
          ? "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      }`}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {inWishlist ? (
        <svg
          className={iconSize[size]}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className={iconSize[size]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      )}
    </button>
  );
};

export default WishlistButton;
