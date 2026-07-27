import {
  Wheat,
  Apple,
  Beef,
  Sprout,
  Tractor,
  Package,
} from "lucide-react";

export interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
  icon: typeof Wheat;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Grains",
    description: "Rice, maize, millet and more",
    productCount: 120,
    icon: Wheat,
  },
  {
    id: 2,
    name: "Vegetables",
    description: "Fresh farm vegetables",
    productCount: 85,
    icon: Sprout,
  },
  {
    id: 3,
    name: "Fruits",
    description: "Sweet and healthy fruits",
    productCount: 64,
    icon: Apple,
  },
  {
    id: 4,
    name: "Livestock",
    description: "Cattle, goats and poultry",
    productCount: 40,
    icon: Beef,
  },
  {
    id: 5,
    name: "Farm Equipment",
    description: "Tools and machinery",
    productCount: 28,
    icon: Tractor,
  },
  {
    id: 6,
    name: "Processed Foods",
    description: "Packaged agricultural products",
    productCount: 73,
    icon: Package,
  },
];