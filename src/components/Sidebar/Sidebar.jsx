import React from 'react'
import { Button, Form, Input, Select, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const { Option } = Select;
import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery } from '../../redux/api/category-api'


function Sidebar() {
    
    const [createCategory, {data: createData, isLoading: createLoading}] = useCreateCategoryMutation()

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


  return (
    <div className='w-1/4 h-screen bg-[#153943] fixed top-0 left-0 flex justify-center items-center'>
    <Form
        onSubmitCapture={handleCreateBlog}
        // onSubmit = {handleCreateBlog}
        className='w-80 flex flex-col bg-slate-400 rounded-md justify-center p-4 gap-1'
    >
        <h2 className='text-center text-white text-2xl'>Create users</h2>
        <Form.Item
            name="fname"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input required type='text' name='fname' placeholder='First name'/>
        </Form.Item>
        <Form.Item
            name="lname"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input required name='lname' placeholder='Last name'/>
        </Form.Item>
        <Form.Item
            name="job"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input name='job' placeholder='Job'/>
        </Form.Item>
        <Form.Item
        name='gender'
            rules={[
            {
                required: true,
            },
            ]}
        >
        <Select 
            required
            name='gender'
            placeholder="Select gender"
            >
            <Option value="" disabled>Select gender</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            </Select>
        </Form.Item>
        <Form.Item>
            <TextArea name='bio' required placeholder='Bio' rows={4} />
        </Form.Item>
        <Form.Item>
        <Button className='w-full' type="primary" htmlType="submit">
            {createLoading ? "Loading..." : "Create"}
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Sidebar
