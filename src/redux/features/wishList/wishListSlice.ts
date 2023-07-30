import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globaltypes";
type IWishList = {
  books: IBooks[];
};

const initialState: IWishList = {
  books: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBooks>) => {
      const existingBooks = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (existingBooks) {
        existingBooks.quantity! += 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
