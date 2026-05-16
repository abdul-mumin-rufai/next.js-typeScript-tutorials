import React from 'react'
import { fetchUsers } from '@/utils/actions';
import DeleteUsers from './deleteUsers';


const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div>
      {users.length ? <div className='max-w-lg'>
        {users.map((user) => {
          return (
            <h1 className='flex justify-between items-center mb-2' key={user.id}>
              <p className='capitalize mt-1'>{user.firstName} {user.lastName}</p>
              <DeleteUsers id={user.id } />
            </h1>
          )
        })}
      </div>:<p className='text-3xl font-bold capitalize'>please there is no usres yet</p>}
    </div>
  )
}

export default UserList;