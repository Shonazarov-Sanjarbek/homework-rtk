import { api } from './index'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({ 
        url: '/category',
        params 
      }),
      providesTags:["Category"]
    }),
    createCategory: build.mutation({
      query: (body)=> ({
        url:"/category",
        method: "POST",
        body
      }),
      invalidatesTags: ["Category"]
    }),
    deleteCategory:build.mutation({
        query: (id)=> ({
            url: `/category/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Category"]
    })
  }),
})

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery} = categoryApi