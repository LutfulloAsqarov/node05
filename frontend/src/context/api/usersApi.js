import { api } from "./index";

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: (params) => ({
                url: "/blog",
                params,
            }),
            providesTags: ["User"],
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: "/blog",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),
        updateUser: build.mutation({
            query: ({ id, body }) => ({
                url: `/blog/${id}`,
                method: "PUT", // or "PATCH"
                body,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useCreateUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation,
} = userApi;
