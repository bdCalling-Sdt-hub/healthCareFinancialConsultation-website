import api from "../api/baseApi";

const ourWayApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOurWays: builder.query({
      query: () => ({
        url: "/healthcareconsultant",
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    //reviews
    getReviews: builder.query({
      query: () => ({
        url: `/review`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOurWaysQuery, useGetReviewsQuery } = ourWayApi;
