import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/apiSlice";
import wishListReducer from "../features/wishList/wishListSlice";
import readingReducer from "../features/readingSlice/readingSlice";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    readingList: readingReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
