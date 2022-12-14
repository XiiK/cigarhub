import React from 'react'
import './PostsList.css'
import './Navbar.css'
import PostsList from './PostsList'

const PageHome = () => {
  return (
    <div className='max-h-screen overflow-y-auto w-100'>
      <div>Home</div>
      <PostsList />
    </div>
  )
}

export default PageHome
