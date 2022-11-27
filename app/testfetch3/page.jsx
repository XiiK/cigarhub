import React from 'react'
const { VERCEL_URL } = process.env

const url = VERCEL_URL ? `${VERCEL_URL}/api/test1` : 'http://localhost:3000/api/test1'
// console.log('NODE_ENV', NODE_ENV)
async function getPosts () {
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
