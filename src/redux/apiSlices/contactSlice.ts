import api from "../api/baseApi";

const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (data) => ({
        url: "/public/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactUsMutation } = contactApi;
