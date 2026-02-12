import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAdd: () => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex h-24 w-full items-center justify-center">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <h3 className="mb-1 font-semibold">{product.name}</h3>
      <p className="mb-3 text-sm text-gray-600">{product.caloriesPer100g} cal / 100g</p>
      <button
        onClick={onAdd}
        className="w-full rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        aria-label={`Add ${product.name} to basket`}
      >
        + Add
      </button>
    </div>
  );
}
