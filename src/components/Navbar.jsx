import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-white p-5 flex justify-between sticky top-0 z-50 mb-12">
      <Link to="/" className="cursor-pointer font-bold text-2xl ml-4">
        Tech-Shop
      </Link>
      <Link to="/cart" className="flex gap-x-2 mr-4">
        <ShoppingCart size={25} className="cursor-pointer" />
        {cart.length}
      </Link>
    </div>
  );
}
