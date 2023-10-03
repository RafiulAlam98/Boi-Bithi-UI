/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books`,
      providesTags: ["books"],
    }),
    getBookBySearch: builder.query({
      query: (data) => `books?searchTerm=${data}`,
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    deleteSingleBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    getSingleBookReview: builder.query({
      query: (id) => `books/${id}`,
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `books/add-books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});
export const {
  useGetAllBooksQuery,
  useGetBookBySearchQuery,
  useGetSingleBookQuery,
  useDeleteSingleBookMutation,
  useEditBookMutation,
  useGetSingleBookReviewQuery,
  useAddNewBookMutation,
} = bookApi;
