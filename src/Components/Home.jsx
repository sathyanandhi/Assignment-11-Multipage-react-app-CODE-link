import React, { use } from 'react'
import { useNavigate,Link} from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
   const handleClick=()=>{
        navigate('/about')
    }
       const handleClick1=()=>{
        navigate('/userlist')
    }
    const bg="https://img.pikbest.com/origin/10/48/80/62SpIkbEsT7jz.jpg!bw700"
  return (
   <div className={` animate-[spin_1s_ease-out_forwards] justify-center  bg-no-repeat bg-cover bg-center rounded-lg`} 
style={{ backgroundImage: `url(${bg})`}} >



        <button onClick={handleClick} className='bg-yellow-500  hover:text-blue-900  hover:bg-red-500  rounded font-bold text-3xl p-2 m-2'>Go to About page</button>
        <button onClick={handleClick1} className='bg-yellow-500  hover:text-blue-900  hover:bg-red-500 rounded font-bold text-2xl p-2 m-2'>Go to UserList page</button>
        
      <h1 className='text-yellow-500 rounded   hover:bg-blue-300          font-bold   italic text-3xl text-center   p-2 md:text-green-600'>Welcome to Multiple Page React App</h1>
    <div className='ml-30 mr-25'>
    <p className=' text-2xl '>Building a multi-page React application is achieved using the standard external library React Router, which allows you to define navigation between different components while maintaining the performance of a single-page application (SPA). </p>
    <h3>1. Prerequisites & Installation</h3>
        <p className='text-2xl'>Ensure you have a React project initialized (e.g., via npm create vite@latest). Install the required routing package:</p>
          <h3>2.Basic App Structure</h3>   
        <p className='text-2xl'>Organize your project by creating a pages/ folder for your main views (e.g., Home, About, Contact) and a components/ folder for shared UI elements like a Navbar. </p>
    <h3>3. Core Implementation (v6.4+)</h3>
           <p className='text-2xl'>The modern approach uses createBrowserRouter for better performance and data fetching capabilities</p>
    
    <h3>4. Navigation and Linking</h3>
    <p className='text-2xl'>To move between pages, use the (Link)component instead of standard anchor tags to prevent full page refreshes.</p>
    
    
    </div></div>
  )
}

export default Home
