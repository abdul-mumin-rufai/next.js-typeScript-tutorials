import React from 'react'
import { deleteUserAction } from '@/utils/actions';

const DeleteUsers = ({ id }: { id: string }) => {
    return (
        <form action={deleteUserAction}>
            <input type="hidden" name='id' value={id} />
            <button className='text-xs bg-green-500 text-white rounded p-2'>
                delete
            </button>
        </form>
    )
};

export default DeleteUsers;