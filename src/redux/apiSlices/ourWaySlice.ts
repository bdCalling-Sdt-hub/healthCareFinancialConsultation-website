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
  }),
});

export const { useGetOurWaysQuery } = ourWayApi;
