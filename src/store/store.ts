import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// get the state type
// since getState is a method not a value thus can not directly get the type from the store
// since typescript has a utility type we can use to get the return value type
// and store that type into the RootState
export type RootState = ReturnType<typeof store.getState>;
//get the type of the store.dispatch from the store
//what is the type of store.dispatch(where can i find it ?)
export type AppDispatch = typeof store.dispatch;
