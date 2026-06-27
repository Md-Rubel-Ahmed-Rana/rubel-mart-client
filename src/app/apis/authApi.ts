import { baseApi } from "./baseApi";

export type SignInBody = {
  email: string;
  password: string;
};

export type SignUpBody = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, SignInBody>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    signUp: builder.mutation<AuthResponse, SignUpBody>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    me: builder.query<User, void>({
      query: () => ({
        url: "/auth/profile",
      }),

      providesTags: ["Auth"],
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(baseApi.util.resetApiState());
        } catch {}
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useMeQuery,
  useLogoutMutation,
} = authApi;
