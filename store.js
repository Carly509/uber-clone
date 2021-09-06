import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice';

import React from 'react'

const store = configureStore({
  reducer: {
    nav: navReducer
  }
});

export default store;

