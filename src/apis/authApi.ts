import { ICurrentUser } from "@/types/auth.type";
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

    getCurrentUser: builder.query<{ data: ICurrentUser }, void>({
      query: () => ({
        url: "/auth",
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
  useGetCurrentUserQuery,
  useLogoutMutation,
} = authApi;
