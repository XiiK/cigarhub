import React from 'react'

const NavbarSh = () => {
  return (
    <>
      <div className='flex flex-row p-4'>
        <div className='m-auto text-3xl'>Logo CigarHub</div>
        <div className='flex m-auto'>
          <div className='flex'>
            <div className='m-auto'>Home</div>
            <div className='m-auto'>About</div>
            <div className='m-auto'>Testimonials</div>
          </div>
          <div className='ml-10 text-3xl'>Login</div>
        </div>
      </div>
    </>
  )
}

export default NavbarSh
