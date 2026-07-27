export interface FlashDeal {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  unit: string;
}

export const flashDeals: FlashDeal[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
    price: 15000,
    oldPrice: 18000,
    discount: 17,
    unit: "Basket",
  },
  {
    id: 2,
    name: "Local Rice",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600",
    price: 82000,
    oldPrice: 90000,
    discount: 9,
    unit: "50kg Bag",
  },
  {
    id: 3,
    name: "Yellow Maize",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600",
    price: 65000,
    oldPrice: 73000,
    discount: 11,
    unit: "100kg Bag",
  },
  {
    id: 4,
    name: "Beans",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600",
    price: 95000,
    oldPrice: 105000,
    discount: 10,
    unit: "100kg Bag",
  },
];