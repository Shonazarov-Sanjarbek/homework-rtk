import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery } from '../../redux/api/category-api'
import { Button } from 'antd'
import male from "../../assets/male.svg"
import female from "../../assets/female.svg"

const Category = () => {
  const {isLoading, data, isSuccess, isError, error} = useGetCategoryQuery()
  const [deleteCategory, {data: deleteData, isLoading: deleteLoading}] = useDeleteCategoryMutation()

  
  console.log();
  
  console.log(data);

  return (
    <div className='w-[75%] h-screen flex p-10 fixed top-0 right-0 flex-col gap-5'>
        <div className='w-full flex gap-4 flex-wrap'>
        {
            data?.map((users)=>(
                <div className='p-2 flex flex-col w-[300px] border' key={users.id}>
                    <img className='w-full h-[200px]' src={users.gender === "male" ? male : female} alt={users.gender} />
                    <h5>{users.fname}</h5>
                    <h5>{users.lname}</h5>
                    <h4>{users.gender}</h4>
                    <h4>{users.bio}</h4>
                    <Button  type="primary" onClick={() => deleteCategory(users.id)}>
                      {isLoading ? "Loading..." : "Delete"}
                    </Button>

                </div>
            ))
        }

        </div>
        
    </div>
  )
}

export default Category