import React from 'react'
import { Outlet } from 'react-router'


const Home = () => {
  return (
    <div>

    <div className='grid grid-cols-2 items-center mx-5 my-5'>
      <div>
      <dotlottie-player src="https://lottie.host/c78f53ea-ab4c-422b-97bd-3986266b40ec/R3TkerZrly.json" background="transparent"  speed="1" loop autoplay></dotlottie-player>
      </div>
      
      <div> 
        <h1 className='text-2xl'> It's me pus pow</h1>
        <p>I'm a software engineer and graphic designer. I recently graduated from the prestigious university of Barcelona and I'm currently working remotely.</p>
      </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Home

