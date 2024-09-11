import { api } from './index'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({ 
        url: '/users',
        params 
      }),
      providesTags:["Category", "Users"]
    }),
    createCategory: build.mutation({
      query: (body)=> ({
        url:"/users",
        method: "POST",
        body
      }),
      invalidatesTags: ["Category", "Users"]
    }),
    deleteCategory:build.mutation({
        query: (id)=> ({
            url: `/users/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Category", "Users"]
    })
  }),
})

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery} = categoryApi