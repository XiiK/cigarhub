import React from 'react'
import Carousel from './Carousel'
const images = [
  'link1',
  'link2'
]
const PageShowcase = () => {
  return (
    <>
      <div className='flex flex-row text-3xl p-4'>
        <div className='m-auto'>Logo CigarHub</div>
        <div className='m-auto'>Login</div>
      </div>
      <div className='border-black rounded-lg p-20'>
        <p className='text-2xl'>Il Social Network per gli amanti del tabacco cubano</p>
        <p className='mt-4'>Condividi con il mondo la tua passione e fai amicizia </p>
        <div className='bg-gray-300 border-black  border-1 rounded-full p-3 mt-5 w-40'>Registrati subito!</div>
        <Carousel images={images} />
        <p>Qui dovrò fare un carosello decente in automatico e migliorare la grafica ~Fede </p>
      </div>
      <div className='flex flex-row'>
        <div className='m-auto'>© 2022 CigarHubTeam</div>
        <div className='m-auto'>Privacy Policy</div>
      </div>
    </>

  )
}

export default PageShowcase
