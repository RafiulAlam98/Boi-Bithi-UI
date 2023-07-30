import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globaltypes";

type IWishList = {
  readingBooks: IBooks[];
  completeStatus: boolean;
};

const initialState: IWishList = {
  readingBooks: [],
  completeStatus: false,
};

const readingSlice = createSlice({
  name: "readingList",
  initialState,
  reducers: {
    addToReadingList: (state, action: PayloadAction<IBooks>) => {
      const existingBooks = state.readingBooks.find(
        (book) => book._id === action.payload._id
      );
      if (existingBooks) {
        existingBooks.quantity! += 1;
      } else {
        state.readingBooks.push({ ...action.payload, quantity: 1 });
      }
    },
    checkStatus: (state) => {
      if (state.completeStatus === false) {
        state.completeStatus = true;
      }
    },
  },
});

export const { addToReadingList, checkStatus } = readingSlice.actions;
export default readingSlice.reducer;
