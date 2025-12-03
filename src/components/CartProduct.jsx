import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

export default function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="flex rounded-lg overflow-hidden shadow-md w-125 mb-5 ml-20 bg-white">
      <img
        src={product.thumbnail}
        alt=""
        className="w-50 h-50 object-cover p-3"
      />
      <div className="p-3">
        <h1 className="font-bold text-2xl">{product.title}</h1>
        <h4 className="">₱{product.price}</h4>
        <div className="flex gap-x-2 mt-2">
          <button
            className="bg-blue-500 rounded-lg px-2"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button>
            <b>{product.quantity}</b>
          </button>
          <button
            className="bg-blue-500 rounded-lg px-2"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="bg-amber-300 rounded-md mb-5 mt-2 px-2 py-1 text-sm font-medium"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
