import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    // <h1 className='bg-blue-900 text-white text-center'>Hi</h1>
 <nav className='bg-green-400 px-6 py-4 hover:bg-red-200'>
  <div className='flex justify-between items-center'>
<h1 className='text text-xl font-bold bg-orange-500 hover:bg-emerald-300'> Multi-Page React Application</h1>
{/* Only in desktop view should hide on mobile view */}
<ul className='hidden md:flex space-x-6 text-white-500 text-2xl'>
    <li className='hover:text-yellow-600'><Link to="/">Home</Link></li>
    <li className='hover:text-yellow-600'><Link to="/about">About</Link></li>
    <li className='hover:text-yellow-600'><Link to="/userlist">Userlist</Link></li>
    <li className='hover:text-yellow-600'><Link to="/userdet/:id">Userdetail</Link></li>
</ul>
{/* Only in mobile view  */}
<button className='md:hidden text-white-500 ' onClick={()=>setOpen(true)}>&#9776;</button>
{open && (
<ul className='md:hidden mt-4 space-y-4 text-grey'>
    <li className='hover:text-yellow-600'><Link to="/">Home</Link></li>
    <li className='hover:text-yellow-600'><Link to="/about">About</Link></li>
    <li className='hover:text-yellow-600'><Link to="/userlist">Userlist</Link></li>
    <li className='hover:text-yellow-600'><Link to="/userdet/:id">Userdetail</Link></li>

</ul>
)}
  </div>
 </nav>
 
  )
}

export default Navbar