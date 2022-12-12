import React from 'react'
import './PostsList.css'
import './Navbar.css'
import PostsList from './PostsList'

const PageHome = () => {
  return (
    <div style={{ overflow: 'scroll', maxHeight: '100vh' }}>
      <div>Home</div>
      <PostsList />
    </div>
  )
}

export default PageHome
