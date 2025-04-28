import api from "../api/baseApi";

const challengeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllChallenges: builder.query({
      query: () => ({
        url: "/challenges",
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getSingleChallenge: builder.query({
      query: (id) => ({
        url: `/challenges/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
  }),
});

export const { useGetAllChallengesQuery, useGetSingleChallengeQuery } =
  challengeApi;
