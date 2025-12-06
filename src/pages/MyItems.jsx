import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

export default function MyItems() {
  const { myItems } = useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {myItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No orders yet. Start shopping!
        </p>
      ) : (
        <div className="space-y-6">
          {myItems.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <div>
                  <h2 className="text-xl font-bold">Order #{order.id}</h2>
                  <p className="text-gray-600 text-sm">Date: {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">
                    Total Items: {order.totalItems}
                  </p>
                  <p className="text-xl font-bold text-green-600">
                    ₱{order.totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-gray-600">₱{item.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Qty: {item.quantity}</p>
                      <p className="font-bold">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
