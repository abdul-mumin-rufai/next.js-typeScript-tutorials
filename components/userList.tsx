import React from 'react'
import { fetchUsers } from '@/utils/actions';


const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div>
        <h1>
            this is the users list
        </h1>
    </div>
  )
}

export default UserList