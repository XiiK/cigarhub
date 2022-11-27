import React from 'react'
const { NEXT_PUBLIC_VERCEL_URL } = process.env

const url = NEXT_PUBLIC_VERCEL_URL ? `https://${NEXT_PUBLIC_VERCEL_URL}/api/test1` : 'http://localhost:3000/api/test1'
console.log('URL', NEXT_PUBLIC_VERCEL_URL, url)
async function getPosts () {
  return 'strings'
  const response = await fetch(url)
  const data = await response.json()
  return data
}
const F = async () => {
  const data = await getPosts()
  console.log('data', data)
  return (
    <div>{
      JSON.stringify(data)
      }
    </div>
  )
}

export default F
