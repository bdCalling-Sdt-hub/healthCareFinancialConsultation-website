import api from "../api/baseApi";

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getSingleService: builder.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    //tabs

    getServiceTabs: builder.query({
      query: (id) => ({
        url: `/tabs/service/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,

  //tabs
  useGetServiceTabsQuery,
} = serviceApi;
