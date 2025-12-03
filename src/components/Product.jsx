import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold">{product.title}</h1>
        <h4 className="text-lg my-2">₱{product.price}</h4>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => dispatch({ type: "Add", product: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
