import Link from 'next/link'
import React from 'react'
const Home = () => {
  return (
    <div className='mt-10 text-3xl text-center bg-blue-600'>
      <Link href='showcase'>Vai allo Showcase</Link>
      <Link href='testfetch'>test</Link>
    </div>
  )
}

export default Home
