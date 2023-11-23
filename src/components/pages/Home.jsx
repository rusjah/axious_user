import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
   <div className='home min-h-[83vh] flex items-center justify-center'>
     <div className="card lg:card-side bg-base-100 shadow-xl px-[10vw] h-[50vh] w-[80vw]">
        <figure className='h-full'><img className='h-full' src="https://images.unsplash.com/photo-1565895701458-7eef4ec6f1d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpZmV8ZW58MHx8MHx8fDA%3D" alt="Album"/></figure>
        <div className="card-body">
        <h2 className="card-title">All information just here!!</h2>
        <p>Let's go to explore our new users together</p>
        <div className="card-actions justify-end">
            <Link to={'/users'}><button className="btn btn-primary font-bold">Show more</button></Link>
        </div>
        </div>
     </div>
   </div>
  )
}

export default Home