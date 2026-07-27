import {
  Users,
  ShoppingBag,
  Tractor,
  MapPinned,
} from "lucide-react";

export interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: typeof Users;
}

export const statistics: Statistic[] = [
  {
    id: 1,
    value: "10,000+",
    label: "Farmers",
    icon: Tractor,
  },
  {
    id: 2,
    value: "50,000+",
    label: "Products",
    icon: ShoppingBag,
  },
  {
    id: 3,
    value: "25,000+",
    label: "Customers",
    icon: Users,
  },
  {
    id: 4,
    value: "36",
    label: "States Covered",
    icon: MapPinned,
  },
];