import { BasketItem } from "@/types/basket";
import { products } from "@/lib/products";

interface BasketProps {
  items: BasketItem[];
  totalCalories: number;
  onRemove: (productId: string) => void;
  onRemoveAll: (productId: string) => void;
  onClear: () => void;
}

export function Basket({ items, totalCalories, onRemove, onRemoveAll, onClear }: BasketProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Basket</h2>
        <p className="text-gray-500">Your basket is empty</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Basket</h2>
        <button
          onClick={onClear}
          className="text-sm text-red-600 hover:text-red-700"
          aria-label="Clear basket"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          const subtotal = product.caloriesPer100g * item.quantity;
          return (
            <div key={item.productId} className="flex items-center justify-between border-b pb-3">
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} × 100g = {subtotal} cal
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onRemove(item.productId)}
                  className="rounded bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300"
                  aria-label={`Remove one portion of ${product.name}`}
                >
                  −
                </button>
                <button
                  onClick={() => onRemoveAll(item.productId)}
                  className="rounded bg-red-100 px-3 py-1 text-red-700 hover:bg-red-200"
                  aria-label={`Remove all ${product.name} from basket`}
                >
                  ×
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 border-t pt-4">
        <div className="flex items-center justify-between text-lg font-bold">
          <span>Total Calories:</span>
          <span>{totalCalories} cal</span>
        </div>
      </div>
    </div>
  );
}
