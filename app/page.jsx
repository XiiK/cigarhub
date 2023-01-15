import Link from 'next/link'
import React from 'react'
const PageRoot = () => {
  return (
    <div className='flex flex-row mt-10 text-3xl text-center bg-red-400'>
      <Link href='showcase' className='m-auto'>Vai allo Showcase</Link>
    </div>
  )
}

export default PageRoot
