import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books`,
    }),
    getSingleBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    getSingleBookReview: builder.query({
      query: (id) => `books/${id}`,
    }),
  }),
});
export const { useGetAllBooksQuery, useGetSingleBookQuery } = bookApi;
