import api from "../api/baseApi";

const bookingSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: ({ date, timeZone }) => {
        return {
          method: "GET",
          url: `/user/schedule/${date}?timeZone=${timeZone}`,
        };
      },
    }),

    createBooking: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/bookings`,
          body: data,
        };
      },
    }),

    myBookings: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `/bookings/my-bookings`,
        };
      },
    }),
  }),
});

export const {
  useGetSlotsQuery,
  useCreateBookingMutation,
  useMyBookingsQuery,
} = bookingSlice;
