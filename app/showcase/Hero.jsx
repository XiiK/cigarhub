import React from 'react'
import Image from 'next/image'
import logoHero from 'public/img/logo.png'
const Hero = () => {
  return (
    <>
      <div id='hero'>
        <div id='hero-navbar' className='flex flex-row p-4'>
          <div className='m-auto'><Image src={logoHero} alt='logo' width={150} height={150} /></div>
          <div className='flex m-auto'>
            <div className='flex flex-row '>
              <div className='ml-2 bg-white rounded-lg m-auto p-2'>Home</div>
              <div className='ml-2 bg-white rounded-lg m-auto p-2'>About</div>
              <div className='ml-2 bg-white rounded-lg m-auto p-2'>Testimonials</div>
            </div>
            <div className='ml-10 text-3xl'>Login</div>
          </div>
        </div>
        <div className='border-black rounded-lg p-20'>
          <p className='text-2xl'>Il Social Network per gli amanti del tabacco cubano</p>
          <p className='mt-4'>Condividi con il mondo la tua passione e fai amicizia </p>
          <div className='bg-gray-300 border-black  border-1 rounded-full p-3 mt-5 w-40'>Registrati subito!</div>
        </div>
      </div>
    </>
  )
}

export default Hero
