'use client'

import React from 'react'
import Image from 'next/image'
import logoHero from 'public/img/logo.png'

const Hero = () => {
  function ClickHome (e) {
    e.preventDefault()
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
  }
  function ClickAbout (e) {
    e.preventDefault()
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }
  function ClickTestimonials (e) {
    e.preventDefault()
    document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })
  }
  function ClickToContact (e) {
    e.preventDefault()
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div className='' id='hero'>
        {/* Header d */}
        <header className='text-gray-600 body-font bg-red-400'>
          <div className='container mx-auto px-10 flex flex-wrap flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <Image id='logo-header' className='w-auto h-auto' src={logoHero} priority alt='logo' width={150} height={150} />
            </a>
            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
              <button id='btn-header' className='rounded-lg mr-5 hover:text-black' onClick={ClickHome}>Home</button>
              <button id='btn-header' className='rounded-lg mr-5 hover:text-black' onClick={ClickAbout}>About</button>
              <button id='btn-header' className='rounded-lg mr-5 hover:text-black' onClick={ClickTestimonials}>Other</button>
              <button id='btn-header' className='rounded-lg mr-5 hover:text-black' onClick={ClickToContact}>Contact Us</button>
            </nav>
            <button id='btn-hlog' className='mx-2 my-2 transistion bg-red-600 transition focus:outline-none text-black hover:text-white rounded px-8 py-3 text-medim'>LOG IN →</button>
          </div>
        </header>

      </div>
    </>
  )
}

export default Hero

/*
      <div id='hero-navbar' className='flex flex-row p-3'>
          <div className='m-auto'>
            <Image className='w-auto h-auto' src={logoHero} alt='logo' width={200} height={200} />
          </div>
          <div className='flex m-auto'>
            <div className='flex flex-row '>
              <div className='cursor-pointer ml-2 bg-white rounded-lg m-auto p-2'>
                <button onClick={ClickHome}>Home</button>
              </div>
              <div className='cursor-pointer ml-2 bg-white rounded-lg m-auto p-2'>
                <button onClick={ClickAbout}>About</button>
              </div>
              <div className='cursor-pointer ml-2 bg-white rounded-lg m-auto p-2'>
                <button onClick={ClickTestimonials}>Testimonials</button>
              </div>
              <div className='cursor-pointer ml-2 bg-white rounded-lg m-auto p-2'>
                <button onClick={ClickToContact}>Contact Us</button>
              </div>
            </div>
            <div className='ml-10 text-2xl bg-blue-600 cursor-pointer rounded-lg m-auto p-3 pl-4 pr-4'>Login</div>
          </div>
        </div>
*/
