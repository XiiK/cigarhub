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
      <div id='hero'>
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
        {/* <div className='border-black rounded-lg p-20'>
          <p className='text-2xl'>Il Social Network per gli amanti del tabacco cubano</p>
          <p className='mt-4'>Condividi con il mondo la tua passione e fai amicizia </p>
          <div className='bg-gray-300 border-black  border-1 rounded-full p-3 mt-5 w-40'>Registrati subito!</div>
        </div> */}
      </div>
    </>
  )
}

export default Hero
