import api from "../api/baseApi";

const filesSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilesByUserId: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/file/user/${id}`,
        };
      },
    }),

    createFile: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/file/upload`,
          body: data,
        };
      },
    }),

    downloadFile: builder.mutation({
      query: (id) => {
        return {
          method: "GET",
          url: `/file/download/${id}`,
          responseHandler: (response) => response.blob(),
        };
      },
    }),
  }),
});

export const {
  useGetFilesByUserIdQuery,
  useCreateFileMutation,
  useDownloadFileMutation,
} = filesSlice;
