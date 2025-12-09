import type { Product } from "./game.components";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
      <div className="w-full md:w-1/4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Genre:</span> {product.genre}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Platform:</span> {product.platform}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
