import { envConfig } from "@/config/env";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: envConfig.base_api,

  credentials: "include",

  prepareHeaders: (headers) => {
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: baseQueryWithReAuth,

  tagTypes: [
    "Auth",
    "User",
    "Product",
    "Category",
    "Brand",
    "Banner",
    "Cart",
    "Wishlist",
    "Order",
    "Review",
    "Coupon",
    "Address",
    "Notification",
  ],

  endpoints: () => ({}),
});
