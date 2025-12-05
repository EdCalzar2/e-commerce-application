import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import CartProduct from "../components/CartProduct";

export default function Cart() {
  const { cart } = useContext(CartContext);

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex gap-4 p-4">
      {/* Left side - Cart items */}
      <div className="flex-1">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cart.map((p) => <CartProduct key={p.id} product={p} />)
        )}
      </div>

      <div className="w-80 bg-white p-6 rounded-lg h-fit sticky top-4 mr-12">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h5>Total Items:</h5>
            <h5 className="font-bold">{totalItems}</h5>
          </div>
          <div className="flex justify-between">
            <h5>Total Price:</h5>
            <h5 className="font-bold">₱{totalPrice.toFixed(2)}</h5>
          </div>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 w-full mt-4 py-2 rounded-lg font-bold text-white transition-colors duration-200 cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
}
