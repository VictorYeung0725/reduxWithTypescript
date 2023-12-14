import { useDispatch } from 'react-redux';

import { AppDispatch } from './store';

// declared a type
//and this type retrived from the store.
type DispatchFunction = () => AppDispatch;

//review this one more time
const useCartDispatch: DispatchFunction = useDispatch;
