'use client'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import fetcher from '../../lib/fetchPosts'

const CreatePost = () => {
  const [input, setInput] = useState('')
  const { data: session } = useSession()
  const { data: posts, error, mutate } = useSWR('/api/getPosts', fetcher)

  console.log('posts', posts)

  const addPost = async (e) => {
    e.preventDefault()

    if (!input) return

    const postMessage = input

    setInput('')

    const id = uuid()
    const post = {
      id,
      post: postMessage,
      createdAt: Date.now,
      username: session?.user.name,
      profilePic: session?.user.image
    }

    const uploadToUpstash = async () => {
      const data = await fetch('api/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post
        })
      }).then((res) => res.json())

      return [data.post, ...posts]
    }
    await mutate(uploadToUpstash, {
      optimisticData: [post, ...posts],
      rollbackOnError: true
    })
  }
  return (
    <form onSubmit={addPost} className='flex space-x-2 ml-2 mt-4 mr-2' id='create-post'>
      <input
        type='text'
        placeholder='Write your message...'
        className='flex-1 px-5 py-3 border rounded'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='bg-red-200 rounded px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={!input || !session}
      >Post
      </button>
    </form>
  )
}

export default CreatePost
