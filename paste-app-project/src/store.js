import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './features'
export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
