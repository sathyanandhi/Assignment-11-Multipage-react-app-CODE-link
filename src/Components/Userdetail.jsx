import React from 'react'
import { Link, useParams, } from "react-router-dom";
import users from '../data/users.js'
const Userdetail = () => {
  
  const {id}=useParams();
    
 
  
  const user=users.find(u=>u.id===parseInt(id, 10));
// (or)const user=users.find(u=>u.id==id);
if(!user){
  return <div>User not found. <Link to='/userlist'>Go back to list</Link></div>;
  }

  
  return (
    
    <div>
      <h1 className='text-yellow-500 rounded bg-danger   hover:bg-blue-300  font-bold   italic text-3xl text-center   p-2 md:text-green-600'>User detail</h1>
      <div className='text-center bg-warning'>
      <h1>{user.name}'s Details</h1>
      <p className='text-3xl'><strong>ID:</strong> {user.id}</p>
      <p className='text-3xl'><strong>Email:</strong> {user.email}</p>
      <p className='text-3xl'><Link to="/userlist">Back to User List</Link></p>
    </div>
           
    </div>
  )
}

export default Userdetail
