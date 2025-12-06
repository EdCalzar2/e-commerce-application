export default function CartReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase":
      return state.map((p) =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case "Decrease":
      return state.map((p) =>
        p.id === action.id ? { ...p, quantity: p.quantity - 1 } : p
      );

    case "ClearCart":
      return [];

    default:
      return state;
  }
}