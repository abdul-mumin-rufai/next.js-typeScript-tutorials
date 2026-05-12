import React from 'react'
import { deleteUserAction, removeUserAction } from '@/utils/actions';

const DeleteUsers = ({ id }: { id: string }) => {
    const removeUserById = removeUserAction.bind(null, id);
    return (
        <form action={removeUserById}>
            <input type="hidden" name='name' value='Mandeeya' />
            <button className='text-xs bg-green-500 text-white rounded p-2'>
                delete
            </button>
        </form>
    )
};

export default DeleteUsers;