import { api } from "../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: `reviews/add-reviews`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = reviewApi;
