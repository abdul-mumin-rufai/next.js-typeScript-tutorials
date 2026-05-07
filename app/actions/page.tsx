import FormInput from '@/components/form';
import UserList from '@/components/userList';
import React from 'react'

const ActionsPage = () => {
    return (
        <div>
            <h1 className='text-3xl text-center mb-4 bg-green-500 p-4 rounded capitalize text-white'>
                this is the actions page
            </h1>
            <FormInput />
            <UserList/>
        </div>
        
    )
};

export default ActionsPage