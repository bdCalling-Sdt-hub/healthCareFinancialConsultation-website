import api from "../api/baseApi";

const notificationSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    notifications: builder.query({
      query: () => ({
        url: "/notification",
        method: "GET",
      }),
      providesTags: ["notification"],
    }),

    readNotification: builder.mutation({
      query: (id) => ({
        url: `/notification/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const { useNotificationsQuery, useReadNotificationMutation } =
  notificationSlice;
