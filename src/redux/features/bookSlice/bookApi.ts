import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books`,
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
  useGetSingleBookQuery,
  useDeleteSingleBookMutation,
  useGetSingleBookReviewQuery,
  useAddNewBookMutation,
} = bookApi;
