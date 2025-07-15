import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../types/Cart';
import type { Course } from '../types/Course';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Course>) => {
      const course = action.payload;
      const existingItem = state.items.find((item) => item.course.id === course.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ course, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.items = state.items.filter((item) => item.course.id !== courseId);
    },
    updateQuantity: (state, action: PayloadAction<{ courseId: string; quantity: number }>) => {
      const { courseId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.course.id === courseId);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;