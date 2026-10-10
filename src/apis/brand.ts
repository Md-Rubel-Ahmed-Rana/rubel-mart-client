import { baseApi } from "./baseApi";
import { IApiResponse } from "@/types/common.type";
import { IBrand } from "@/types/brand.type";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<IApiResponse<{ brands: IBrand[] }>, void>({
      query: () => ({
        url: "/brands",
      }),
      providesTags: ["Brand"],
    }),
  }),
});

export const { useGetBrandsQuery } = brandApi;
