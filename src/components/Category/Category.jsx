import React, { useEffect } from 'react'
import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery } from '../../redux/api/category-api'

const Category = () => {
  const {isLoading, data, isSuccess, isError, error} = useGetCategoryQuery()
  const [createCategory, {data: createData, isLoading: createLoading}] = useCreateCategoryMutation()
  const [deleteCategory, {data: deleteData, isLoading: deleteLoading}] = useDeleteCategoryMutation()

  const handleCreateBlog = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries())

    createCategory(data)

      .unwrap()
      .then(() =>{
        event.target.reset()
      })
  }

  // console.log(data);

  return (
    <div className='w-[75%] h-screen flex p-10 fixed top-0 right-0'>
        <h2>Category</h2>

        <form onSubmit={handleCreateBlog} action="">
            <input className='border' type="text" name='title' />
            <button> {createLoading ? "Loading..." : "Create"} </button>
        </form>
        {isLoading && <h3>Loading...</h3>}
        {
            data?.map((category)=>(
                <div key={category.id}>
                    <h5>{category.title}</h5>
                    <button onClick={() => deleteCategory(category.id)} >delete</button>
                </div>
            ))
        }
        
    </div>
  )
}

export default Category