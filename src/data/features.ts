import {
  ShieldCheck,
  Truck,
  Leaf,
  CreditCard,
} from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Fresh Farm Products",
    description:
      "Buy directly from trusted farmers with guaranteed freshness.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Verified Vendors",
    description:
      "Every seller is verified to ensure quality and trust.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Fast Delivery",
    description:
      "Reliable nationwide delivery to your doorstep.",
    icon: Truck,
  },
  {
    id: 4,
    title: "Secure Payments",
    description:
      "Safe and secure online payment options.",
    icon: CreditCard,
  },
];