import api from "../api/baseApi";

const publicSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "/public/privacy-policy",
        method: "GET",
      }),
    }),

    getTermsAndCondition: builder.query({
      query: () => ({
        url: "/public/terms-and-condition",
        method: "GET",
      }),
    }),

    getFaqs: builder.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
    }),

    getAboutUs: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPrivacyPolicyQuery,
  useGetTermsAndConditionQuery,
  useGetFaqsQuery,
  useGetAboutUsQuery,
} = publicSlice;
