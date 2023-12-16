import { CartItem, addToCard, removeFromCart } from '../store/cart-slice';
import { useCartDispatch, useCartSelector } from '../store/hook';

export default function CartItems() {
  const dispatch = useCartDispatch();
  const { items } = useCartSelector((state) => state.cart);

  const totalPrice = items.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = totalPrice.toFixed(2);

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item: CartItem) {
    dispatch(addToCard(item));
  }

  return (
    <div id='cart'>
      <p>No items in cart!</p>

      <ul id='cart-items'>
        {items.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className='cart-item-actions'>
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id='cart-total-price'>
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
