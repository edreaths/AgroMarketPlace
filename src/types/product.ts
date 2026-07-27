export interface Product {
  id: number;
  name: string;
  description: string;

  image: string;

  category: string;

  vendor: string;

  location: string;

  unit: string;

  price: number;

  oldPrice?: number;

  discount?: number;

  rating: number;

  reviews: number;

  stock: number;

  featured?: boolean;

  flashDeal?: boolean;

  trending?: boolean;
}