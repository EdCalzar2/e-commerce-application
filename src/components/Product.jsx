import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="rounded-lg overflow-hidden p-4 shadow-md shadow-gray-500/50 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-101 bg-white/50">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-50 object-cover rounded-md"
      />
      <div className="mt-2">
        <h1 className="text-xl font-bold">{product.title}</h1>
        <h4 className="text-lg my-2">₱{product.price}</h4>
        <button
          className="bg-[#ea701a] hover:bg-[#cd6317] text-white px-4 py-2 rounded cursor-pointer text-sm transition-colors duration-200 ease-in-out"
          onClick={() => dispatch({ type: "Add", product: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
