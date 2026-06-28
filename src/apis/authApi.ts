import { ICurrentUser, ISignInBody, ISignupPayload } from "@/types/auth.type";
import { baseApi } from "./baseApi";
import { IApiResponse } from "@/types/common.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<IApiResponse<any>, ISignInBody>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    signUp: builder.mutation<IApiResponse<any>, ISignupPayload>({
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
    logout: builder.mutation<IApiResponse<any>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
} = authApi;
