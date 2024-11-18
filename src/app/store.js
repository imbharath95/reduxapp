
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../features/apislice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
