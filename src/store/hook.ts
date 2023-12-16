import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import { AppDispatch, RootState } from './store';

// declared a type
//and this type retrived from the store.
type DispatchFunction = () => AppDispatch;

//create ourself standalone type and trtived from the store
export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
