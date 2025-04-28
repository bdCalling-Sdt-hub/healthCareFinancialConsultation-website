import api from "../api/baseApi";

const horizonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllHorizon: builder.query({
      query: () => ({
        url: "/insights",
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getSingleInsight: builder.query({
      query: (id) => ({
        url: `/insights/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
  }),
});

export const { useGetAllHorizonQuery, useGetSingleInsightQuery } = horizonApi;
