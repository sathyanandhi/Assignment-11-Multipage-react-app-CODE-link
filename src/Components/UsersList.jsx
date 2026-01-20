import React from 'react'
import users from '../data/users.js'
import { Link } from 'react-router-dom';
const UsersList = () => {

    return (
    <div>
      <h1 className='text-success rounded bg-rose-300   hover:bg-blue-300  font-bold   italic text-3xl text-center   p-2 md:text-green-600'>User List</h1>
      <ul className='bg-amber-300'>
         {users.map((user)=>(
        <li className='text-3xl text-center ' key={user.id}>{user.id}-{user.name}
          <button className=' p-2 m-2'><Link to ={`/userdet/${user.id}`}>  click here </Link></button>
         

        </li>))}
     
      </ul>
      
    </div>
  )
}

export default UsersList
