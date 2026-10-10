import { baseApi } from "./baseApi";
import { IApiResponse } from "@/types/common.type";
import { ICategory } from "@/types/category.type";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<
      IApiResponse<{ categories: ICategory[] }>,
      void
    >({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
