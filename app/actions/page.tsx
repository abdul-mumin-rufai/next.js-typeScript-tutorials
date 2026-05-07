import FormInput from '@/components/form';
import UserList from '@/components/userList';
import React from 'react'

const ActionsPage = () => {
    return (
        <div>
            <h1 className='py-2 bg-green-500 rounded mb-4 text-3xl text-white text-center capitalize'>
                this is the actions page
            </h1>
            <FormInput />
            <UserList/>
        </div>
        
    )
};

export default ActionsPage