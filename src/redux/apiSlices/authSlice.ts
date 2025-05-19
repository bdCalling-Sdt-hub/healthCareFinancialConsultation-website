import api from "../api/baseApi";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: "/user/create-user",
        method: "POST",
        body: data,
      }),
    }),

    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (value) => {
        return {
          method: "POST",
          url: "/auth/change-password",
          body: value,
        };
      },
    }),

    otpVerify: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "auth/verify-account",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
        headers: {
          Authorization: localStorage.getItem("oneTimeToken") || undefined,
        },
      }),
    }),

    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: ["userProfile"],
    }),

    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: "/user/profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["userProfile"],
    }),

    deleteUserProfile: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/delete-account",
          method: "DELETE",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useOtpVerifyMutation,
  useResetPasswordMutation,
  useDeleteUserProfileMutation,
} = authApi;
