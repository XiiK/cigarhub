import React from 'react'
import './PostsList.css'
import './navbar.css'
import CreatePost from './CreatePost'
import PostsList from './PostsList'

const PageHome = () => {
  return (
    <div className='max-h-screen overflow-y-auto w-full'>
      <div>Home</div>
      <CreatePost />
      <PostsList />
    </div>
  )
}

export default PageHome
