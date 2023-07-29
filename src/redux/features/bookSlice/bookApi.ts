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
  useGetSingleBookReviewQuery,
  useAddNewBookMutation,
} = bookApi;
