import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

import { IUser } from '../types/user.types';

export const userApi = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => ({
        url: `/users`,
      }),
    }),
    getUserById: build.query<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
    editUser: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
    createUser: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body,
      }),
    }),
    deleteUser: build.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useEditUserMutation,
  useGetUsersQuery,
  useLazyGetUserByIdQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;
