export interface Vendor {
  id: number;
  name: string;
  location: string;
  image: string;
  products: number;
  rating: number;
  verified: boolean;
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "Kano Agro",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=500",
    products: 120,
    rating: 4.9,
    verified: true,
  },
  {
    id: 2,
    name: "Kaduna Farms",
    location: "Kaduna, Nigeria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    products: 84,
    rating: 4.8,
    verified: true,
  },
  {
    id: 3,
    name: "Dawanau Market",
    location: "Kano, Nigeria",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    products: 215,
    rating: 5.0,
    verified: true,
  },
];