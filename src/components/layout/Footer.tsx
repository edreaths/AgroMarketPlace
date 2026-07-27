import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">

        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white">
            AgroMarketPlace
          </h2>

          <p className="mt-4 leading-7">
            Connecting farmers, vendors and buyers through a modern,
            trusted agricultural marketplace.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Marketplace
          </h3>

          <ul className="space-y-3">
            <li><Link to="/marketplace">Products</Link></li>
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/">Vendors</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3">
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Follow Us
          </h3>

          <div className="flex gap-4">
           <FaFacebook className="cursor-pointer hover:text-green-500" />
            <FaInstagram className="cursor-pointer hover:text-green-500" />
            <FaLinkedin className="cursor-pointer hover:text-green-500" />
            <FaGithub className="cursor-pointer hover:text-green-500" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AgroMarketPlace.
        All rights reserved.
      </div>
    </footer>
  );
}