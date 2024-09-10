import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery } from '../../redux/api/category-api'

const Category = () => {
  const {isLoading, data, isSuccess, isError, error} = useGetCategoryQuery()
  const [deleteCategory, {data: deleteData, isLoading: deleteLoading}] = useDeleteCategoryMutation()



  // console.log(data);

  return (
    <div className='w-[75%] h-screen flex p-10 fixed top-0 right-0'>
        <h2>Category</h2>

        <form action="">
            <input className='border' type="text" name='title' />
            <button>  </button>
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