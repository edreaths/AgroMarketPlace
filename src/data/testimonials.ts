export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Musa Ibrahim",
    role: "Farmer",
    location: "Kano",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    comment:
      "AgroMarketPlace helped me sell my farm produce faster than ever before.",
  },
  {
    id: 2,
    name: "Fatima Bello",
    role: "Food Vendor",
    location: "Kaduna",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    comment:
      "The products are always fresh and the delivery service is excellent.",
  },
  {
    id: 3,
    name: "John David",
    role: "Restaurant Owner",
    location: "Abuja",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    comment:
      "A reliable marketplace with trusted vendors and competitive prices.",
  },
];