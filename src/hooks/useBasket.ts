"use client";

import { useState } from "react";
import { BasketItem } from "@/types/basket";
import { products } from "@/lib/products";

export function useBasket() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addProduct = (productId: string) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeProduct = (productId: string) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((item) => item.productId !== productId);
      }
      return prev.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeAllProduct = (productId: string) => {
    setBasket((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const calculateTotalCalories = () => {
    return basket.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return total;
      return total + product.caloriesPer100g * item.quantity;
    }, 0);
  };

  return {
    basket,
    addProduct,
    removeProduct,
    removeAllProduct,
    clearBasket,
    calculateTotalCalories,
  };
}
