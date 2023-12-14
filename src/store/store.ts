import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

//get the type of the store.dispatch from the store
//what is the type of store.dispatch(where can i find it ?)
export type AppDispatch = typeof store.dispatch;
