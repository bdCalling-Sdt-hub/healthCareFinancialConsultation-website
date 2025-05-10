import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://10.0.80.49:5010/api/v1",
    baseUrl: "http://10.0.80.49:5020/api/v1",
    // baseUrl: 'https://tamim.binarybards.online/api/v1',
    prepareHeaders: (headers) => {
      const token =
        localStorage.getItem("authenticationToken") ||
        sessionStorage.getItem("authenticationToken");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["service", "userProfile", "notification"],
});

export const { reducer } = api;
export default api;
export const imageUrl = "http://10.0.80.49:5020";
