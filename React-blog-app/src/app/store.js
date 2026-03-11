import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blog/BlogSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
