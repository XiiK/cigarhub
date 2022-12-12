import React from 'react'

const getPosts = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/getPosts')
  return res.json()
}

const PostsList = async () => {
  const Posts = await getPosts()
  return (
    <div className='post-wrapper'>
      {Posts.map((post) => (
        <div className='post' key={post.post_id}>
          <h1>{post.text}</h1>
          <img src={post.image} alt={post.post_id} width={500} height={200} />
        </div>
      ))}
    </div>
  )
}

export default PostsList
