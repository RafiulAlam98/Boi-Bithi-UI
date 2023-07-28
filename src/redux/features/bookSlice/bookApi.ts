import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books`,
    }),
  }),
});
export const { useGetAllBooksQuery } = bookApi;
