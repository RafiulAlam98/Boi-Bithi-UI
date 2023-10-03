import { api } from "../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `reviews/add-reviews/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = reviewApi;
