import React from 'react'

const F = async () => {
  const data = await fetch('http://localhost:3000/api/test')
  const posts = await data.json()

  console.log('data', posts)
  return (
    <div>{
      JSON.stringify(posts)
      }
    </div>
  )
}

export default F