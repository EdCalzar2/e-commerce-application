import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-gray-500 p-5 flex justify-between mb-12">
      <Link to="/" className="cursor-pointer">
        Shop
      </Link>
      <Link to="/cart" className="flex gap-x-2">
        <ShoppingCart className="cursor-pointer" />
        {cart.length}
      </Link>
    </div>
  );
}
