import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
const About = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/')

  }
  return (
    <div className='bg-yellow-200'>
      <button onClick={handleClick} className='bg-yellow-500  hover:text-blue-900  hover:bg-red-500  rounded font-bold text-3xl p-2 m-2'>Go back to Home page</button>
    <h1 className=' hover:bg-green-500 text-violet-800 text-center font-bold bg-amber-600  p-2'>Details About the App</h1>
    <p className='text-2xl bg-red-300 m-2  text-violet-800'> Building a multi-page experience in React with routing serves to create a faster, more seamless user experience by simulating traditional page navigation within a single-page application (SPA) without requiring full page reloads. 
</p>
<Card>
      <Card.Header className=' text-3xl font-bold text-center  bg-success p-2 text-white bg-opacity-75  hover:bg-amber-700'>Core Purposes and Benefits</Card.Header>
      <Card.Body className='bg-success-subtle text-secondary'>
        <Card.Title >SEO (Search Engine Optimization):</Card.Title>
        <Card.Text >
          Routing allows users to navigate between pages (e.g., /home, /about, /users) without a full browser reload, creating a fast and fluid transition.MPAs are inherently more SEO-friendly because each distinct page has its own unique URL, content, and the ability to be optimized for specific keywords and meta tags. This structure makes it easier for search engine crawlers to index the site's content effectively.
        </Card.Text>
        
      </Card.Body>
      
    </Card>
    
    <Card>
     
      <Card.Body className='bg-warning text-danger'>
        <Card.Title >Scalability for Content-Heavy Sites: </Card.Title>
        <Card.Text >
         When an application requires a large amount of content across many different sections or product categories (e.g., e-commerce sites, news portals, large business sites), an MPA structure provides better organization and navigation.
          </Card.Text>danger-subtle
      </Card.Body>
      
    </Card>
    <Card>
     
      <Card.Body className='bg-info text-white'>
        <Card.Title >Traditional Navigation: </Card.Title>
        <Card.Text >
         MPAs support traditional browser navigation features well, such as using the back/forward buttons or bookmarking specific pages, which provides a familiar user experience.
          </Card.Text>
      </Card.Body>
      
    </Card>
    <Card>
     
      <Card.Body className='bg-success text-white'>
        <Card.Title >Analytics Integration:  </Card.Title>
        <Card.Text >
With distinct pages and URLs, tools like Google Analytics can provide more detailed insights into which specific sections or pages are performing well, allowing for more targeted content and feature improvements.           </Card.Text>
      </Card.Body>
      
    </Card>
    
    </div>
  )
}

export default About
