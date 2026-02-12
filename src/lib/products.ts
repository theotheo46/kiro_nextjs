import { Product } from "@/types/product";

const basePath = process.env.NODE_ENV === "production" ? "/kiro_nextjs" : "";

export const products: Product[] = [
  // Fruits
  { id: "1", name: "Apple", caloriesPer100g: 52, image: `${basePath}/products/apple.svg`, category: "Fruits" },
  {
    id: "2",
    name: "Banana",
    caloriesPer100g: 89,
    image: `${basePath}/products/banana.svg`,
    category: "Fruits",
  },
  {
    id: "3",
    name: "Orange",
    caloriesPer100g: 47,
    image: `${basePath}/products/orange.svg`,
    category: "Fruits",
  },
  {
    id: "4",
    name: "Strawberry",
    caloriesPer100g: 32,
    image: `${basePath}/products/strawberry.svg`,
    category: "Fruits",
  },
  {
    id: "5",
    name: "Grapes",
    caloriesPer100g: 69,
    image: `${basePath}/products/grapes.svg`,
    category: "Fruits",
  },

  // Vegetables
  {
    id: "6",
    name: "Broccoli",
    caloriesPer100g: 34,
    image: `${basePath}/products/broccoli.svg`,
    category: "Vegetables",
  },
  {
    id: "7",
    name: "Carrot",
    caloriesPer100g: 41,
    image: `${basePath}/products/carrot.svg`,
    category: "Vegetables",
  },
  {
    id: "8",
    name: "Tomato",
    caloriesPer100g: 18,
    image: `${basePath}/products/tomato.svg`,
    category: "Vegetables",
  },
  {
    id: "9",
    name: "Cucumber",
    caloriesPer100g: 16,
    image: `${basePath}/products/cucumber.svg`,
    category: "Vegetables",
  },
  {
    id: "10",
    name: "Spinach",
    caloriesPer100g: 23,
    image: `${basePath}/products/spinach.svg`,
    category: "Vegetables",
  },

  // Grains
  {
    id: "11",
    name: "White Rice",
    caloriesPer100g: 130,
    image: `${basePath}/products/rice.svg`,
    category: "Grains",
  },
  {
    id: "12",
    name: "Whole Wheat Bread",
    caloriesPer100g: 247,
    image: `${basePath}/products/bread.svg`,
    category: "Grains",
  },
  {
    id: "13",
    name: "Oatmeal",
    caloriesPer100g: 68,
    image: `${basePath}/products/oatmeal.svg`,
    category: "Grains",
  },
  {
    id: "14",
    name: "Pasta",
    caloriesPer100g: 131,
    image: `${basePath}/products/pasta.svg`,
    category: "Grains",
  },
  {
    id: "15",
    name: "Quinoa",
    caloriesPer100g: 120,
    image: `${basePath}/products/quinoa.svg`,
    category: "Grains",
  },

  // Proteins
  {
    id: "16",
    name: "Chicken Breast",
    caloriesPer100g: 165,
    image: `${basePath}/products/chicken.svg`,
    category: "Proteins",
  },
  {
    id: "17",
    name: "Salmon",
    caloriesPer100g: 208,
    image: `${basePath}/products/salmon.svg`,
    category: "Proteins",
  },
  {
    id: "18",
    name: "Eggs",
    caloriesPer100g: 155,
    image: `${basePath}/products/eggs.svg`,
    category: "Proteins",
  },
  {
    id: "19",
    name: "Tofu",
    caloriesPer100g: 76,
    image: `${basePath}/products/tofu.svg`,
    category: "Proteins",
  },
  {
    id: "20",
    name: "Beef",
    caloriesPer100g: 250,
    image: `${basePath}/products/beef.svg`,
    category: "Proteins",
  },

  // Dairy
  { id: "21", name: "Milk", caloriesPer100g: 42, image: `${basePath}/products/milk.svg`, category: "Dairy" },
  {
    id: "22",
    name: "Yogurt",
    caloriesPer100g: 59,
    image: `${basePath}/products/yogurt.svg`,
    category: "Dairy",
  },
  {
    id: "23",
    name: "Cheese",
    caloriesPer100g: 402,
    image: `${basePath}/products/cheese.svg`,
    category: "Dairy",
  },
  {
    id: "24",
    name: "Butter",
    caloriesPer100g: 717,
    image: `${basePath}/products/butter.svg`,
    category: "Dairy",
  },

  // Snacks
  {
    id: "25",
    name: "Almonds",
    caloriesPer100g: 579,
    image: `${basePath}/products/almonds.svg`,
    category: "Snacks",
  },
  {
    id: "26",
    name: "Peanut Butter",
    caloriesPer100g: 588,
    image: `${basePath}/products/peanut-butter.svg`,
    category: "Snacks",
  },
  {
    id: "27",
    name: "Dark Chocolate",
    caloriesPer100g: 546,
    image: `${basePath}/products/chocolate.svg`,
    category: "Snacks",
  },
  {
    id: "28",
    name: "Potato Chips",
    caloriesPer100g: 536,
    image: `${basePath}/products/chips.svg`,
    category: "Snacks",
  },
  {
    id: "29",
    name: "Granola Bar",
    caloriesPer100g: 471,
    image: `${basePath}/products/granola.svg`,
    category: "Snacks",
  },
  {
    id: "30",
    name: "Popcorn",
    caloriesPer100g: 387,
    image: `${basePath}/products/popcorn.svg`,
    category: "Snacks",
  },
];
