"use client";

import { ProductCard } from "@/components/ProductCard";
import { Basket } from "@/components/Basket";
import { products } from "@/lib/products";
import { useBasket } from "@/hooks/useBasket";

export default function Home() {
  const {
    basket,
    addProduct,
    removeProduct,
    removeAllProduct,
    clearBasket,
    calculateTotalCalories,
  } = useBasket();

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold">Calories Calculator</h1>
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Products</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={() => addProduct(product.id)}
                />
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Basket
              items={basket}
              totalCalories={calculateTotalCalories()}
              onRemove={removeProduct}
              onRemoveAll={removeAllProduct}
              onClear={clearBasket}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
