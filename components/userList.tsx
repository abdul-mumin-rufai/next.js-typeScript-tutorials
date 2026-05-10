import React from 'react'
import { fetchUsers } from '@/utils/actions';


const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div>
      {users.length ? <div>
        {users.map((user) => {
          return (
            <h1 key={user.id}>
              <p className='capitalize mt-1'>{user.firstName} { user.lastName}</p>
            </h1>
          )
        })}
      </div>:<p className='text-3xl font-bold capitalize'>please there is no usres yet</p>}
    </div>
  )
}

export default UserList;