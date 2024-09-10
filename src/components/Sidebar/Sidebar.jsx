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
        onSubmit = {handleCreateBlog}
        className='w-80 flex flex-col bg-slate-400 rounded-md justify-center p-4 gap-1'
    >
        <h2 className='text-center text-white text-2xl'>Create users</h2>
        <Form.Item
            name="First name"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input type='text' name='First name' placeholder='First name'/>
        </Form.Item>
        <Form.Item
            name="Last name"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input placeholder='Last name'/>
        </Form.Item>
        <Form.Item
            name="Job"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input placeholder='Job'/>
        </Form.Item>
        <Form.Item
            name="gender"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Select
            placeholder="Select gender"
            allowClear
            >
            <Option value disabled>Select gender</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            </Select>
        </Form.Item>
        <Form.Item>
            <TextArea placeholder='Bio' rows={4} />
            </Form.Item>
        <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
            {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
                <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                <Input />
                </Form.Item>
            ) : null
            }
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
