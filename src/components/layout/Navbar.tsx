import useCart from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          AgroMarketPlace
        </h1>

        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="hover:text-green-200">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/marketplace"
              className="hover:text-green-200"
            >
              Marketplace
            </Link>
          </li>

          <li>
            <a href="#" className="hover:text-green-200">
              Vendors
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-200">
              Contact
            </a>
          </li>

          <li>
            <Link
              to="/cart"
              className="relative flex items-center gap-2 hover:text-green-200"
            >
              <ShoppingCart size={20} />

              <span>Cart</span>

              {totalItems > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;