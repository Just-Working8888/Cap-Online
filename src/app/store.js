import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/slice';
import brandsReducer from '../features/brands/slice';
import capsReducer from '../features/caps/slice';
import usersReducer from '../features/users/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    brands: brandsReducer,
    caps: capsReducer,
    users: usersReducer,
  },
});
