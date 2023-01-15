'use client'
import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetchPosts'
import Image from 'next/image'
import TimeAgo from 'react-timeago'
const PostsList = () => {
  const { data: posts, error, mutate } = useSWR('/api/getPosts', fetcher)
  return (
    <div className='px-2 mb-10'>
      {posts?.map((post) => (
        <div className='flex px-4 py-3 mt-3 bg-red-400 rounded' key={post.id}>
          <div className='basis-1/8'>
            <Image
              src={post.profilePic}
              alt='propic'
              height={30}
              width={30}
              className='rounded-full'
            />
            <p>{post.username}</p>
            <p className='text-xs'>
              <TimeAgo date={new Date(post.createdAt)} />
            </p>
          </div>
          <p className='text-xl ml-10'>{post.post}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsList
